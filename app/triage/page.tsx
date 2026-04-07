'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { TRIAGE_QUEUE } from '@/lib/mock-data'
import TriageCard, { type TriageAction } from '@/components/TriageCard'
import type { Topic } from '@/lib/types'

type ActionRecord = { topic: Topic; action: TriageAction; prevIndex: number }

const ACTION_LABEL: Record<TriageAction, string> = {
  know: 'K·Now — added to Now',
  assign: 'A→ Assign — assigned',
  transfer: 'T→ Track — tracked',
  dismiss: '✕ — dropped',
}

const ACTION_COLOR: Record<TriageAction, string> = {
  know: 'text-done',
  assign: 'text-accent',
  transfer: 'text-purple-400',
  dismiss: 'text-overdue',
}

const TOAST_DURATION = 3000 // ms

interface UndoToast {
  id: number
  message: string
  actionColor: string
  progress: number // 0–100, countdown
}

export default function TriagePage() {
  const [queue] = useState<Topic[]>(TRIAGE_QUEUE)
  const [current, setCurrent] = useState(0)
  const [log, setLog] = useState<ActionRecord[]>([])
  const [done, setDone] = useState(false)
  const [toast, setToast] = useState<UndoToast | null>(null)
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const toastRafRef = useRef<number | null>(null)
  const toastStartRef = useRef<number>(0)
  const toastIdRef = useRef(0)

  const total = queue.length
  const topic = queue[current]

  const clearToastTimers = () => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current)
    if (toastRafRef.current) cancelAnimationFrame(toastRafRef.current)
  }

  const startToastCountdown = (id: number) => {
    toastStartRef.current = performance.now()
    const tick = (now: number) => {
      const elapsed = now - toastStartRef.current
      const progress = Math.max(0, 100 - (elapsed / TOAST_DURATION) * 100)
      setToast((prev) => (prev && prev.id === id ? { ...prev, progress } : prev))
      if (elapsed < TOAST_DURATION) {
        toastRafRef.current = requestAnimationFrame(tick)
      }
    }
    toastRafRef.current = requestAnimationFrame(tick)
    toastTimerRef.current = setTimeout(() => {
      setToast((prev) => (prev && prev.id === id ? null : prev))
    }, TOAST_DURATION)
  }

  const showToast = (action: TriageAction, topicTitle: string) => {
    clearToastTimers()
    const id = ++toastIdRef.current
    setToast({
      id,
      message: `${ACTION_LABEL[action]} · "${topicTitle.slice(0, 36)}${topicTitle.length > 36 ? '…' : ''}"`,
      actionColor: ACTION_COLOR[action],
      progress: 100,
    })
    startToastCountdown(id)
  }

  const handleAction = useCallback(
    (action: TriageAction) => {
      if (!topic) return
      setLog((prev) => [...prev, { topic, action, prevIndex: current }])
      showToast(action, topic.title)
      if (current + 1 >= total) {
        setDone(true)
      } else {
        setCurrent((c) => c + 1)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [topic, current, total]
  )

  const handleUndo = useCallback(() => {
    if (log.length === 0) return
    const last = log[log.length - 1]
    setLog((prev) => prev.slice(0, -1))
    setCurrent(last.prevIndex)
    setDone(false)
    clearToastTimers()
    setToast(null)
  }, [log])

  // Z key for undo (global, separate from TriageCard shortcuts)
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.target as HTMLElement).tagName === 'INPUT') return
      if (e.key.toLowerCase() === 'z' && !e.metaKey && !e.ctrlKey) {
        handleUndo()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleUndo])

  // Cleanup on unmount
  useEffect(() => () => clearToastTimers(), [])

  const handleRestart = () => {
    setCurrent(0)
    setLog([])
    setDone(false)
    setToast(null)
    clearToastTimers()
  }

  if (done) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 py-12 flex flex-col gap-6">
        <div className="text-center flex flex-col gap-2">
          <div className="text-4xl">✓</div>
          <h1 className="text-text font-bold text-xl">Triage complete</h1>
          <p className="text-muted text-sm">
            {total} item{total !== 1 ? 's' : ''} processed
          </p>
        </div>

        {/* Action log */}
        <div className="bg-card rounded-card border border-border shadow-card p-4 flex flex-col gap-2">
          <h2 className="text-label text-xs font-mono uppercase tracking-widest mb-1">
            Session log
          </h2>
          {log.map((entry, i) => (
            <div key={i} className="flex items-start gap-2 text-xs">
              <span className="font-mono text-muted w-4 flex-shrink-0">{i + 1}.</span>
              <span className="flex-1 text-text-secondary truncate">{entry.topic.title}</span>
              <span className={`flex-shrink-0 font-mono ${ACTION_COLOR[entry.action]}`}>
                {ACTION_LABEL[entry.action]}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleRestart}
          className="self-center px-6 py-2.5 bg-accent hover:bg-accent-hover text-white font-semibold text-sm rounded-btn transition-colors"
        >
          Triage again
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-text font-bold text-xl tracking-tight">Triage</h1>
        <p className="text-muted text-sm mt-1">
          Process your inbox one item at a time · keyboard shortcuts active
        </p>
      </div>

      {/* Triage card + controls */}
      {topic && (
        <TriageCard
          topic={topic}
          current={current + 1}
          total={total}
          onAction={handleAction}
        />
      )}

      {/* Recent actions log (last 3) */}
      {log.length > 0 && (
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-muted text-[10px] font-mono uppercase tracking-widest">
              Recent
            </span>
            <button
              onClick={handleUndo}
              className="text-[10px] font-mono text-accent/70 hover:text-accent transition-colors"
            >
              ↩ Undo last (Z)
            </button>
          </div>
          {log
            .slice(-3)
            .reverse()
            .map((entry, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs opacity-60 hover:opacity-100 transition-opacity"
              >
                <span className={`font-mono ${ACTION_COLOR[entry.action]}`}>
                  {ACTION_LABEL[entry.action]}
                </span>
                <span className="text-muted">·</span>
                <span className="text-text-secondary truncate">{entry.topic.title}</span>
              </div>
            ))}
        </div>
      )}

      {/* Undo Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[min(480px,90vw)] pointer-events-none">
          <div className="relative bg-[#1a2235] border border-border rounded-card shadow-card-hover overflow-hidden pointer-events-auto">
            {/* Content */}
            <div className="flex items-center gap-3 px-4 py-3">
              <span className={`text-xs font-mono flex-1 truncate ${toast.actionColor}`}>
                {toast.message}
              </span>
              <button
                onClick={handleUndo}
                className="flex-shrink-0 text-xs font-semibold text-accent hover:text-white bg-accent/15 hover:bg-accent px-2.5 py-1 rounded transition-all"
              >
                Undo
              </button>
              <span className="text-[10px] font-mono text-muted/60 flex-shrink-0">
                Press Z
              </span>
            </div>
            {/* Countdown bar */}
            <div className="h-[3px] bg-border">
              <div
                className="h-full bg-accent/70 transition-none rounded-full"
                style={{ width: `${toast.progress}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
