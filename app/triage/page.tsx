'use client'

import { useState, useCallback } from 'react'
import { TRIAGE_QUEUE } from '@/lib/mock-data'
import TriageCard, { type TriageAction } from '@/components/TriageCard'
import type { Topic } from '@/lib/types'

type ActionRecord = { topic: Topic; action: TriageAction }

const ACTION_LABEL: Record<TriageAction, string> = {
  know: 'K·Now — added to Now',
  assign: 'A→ — assigned',
  transfer: 'T→ — transferred',
  dismiss: '✕ — dismissed',
}

const ACTION_COLOR: Record<TriageAction, string> = {
  know: 'text-done',
  assign: 'text-accent',
  transfer: 'text-purple-400',
  dismiss: 'text-overdue',
}

export default function TriagePage() {
  const [queue, setQueue] = useState<Topic[]>(TRIAGE_QUEUE)
  const [current, setCurrent] = useState(0)
  const [log, setLog] = useState<ActionRecord[]>([])
  const [done, setDone] = useState(false)

  const topic = queue[current]
  const total = queue.length

  const handleAction = useCallback(
    (action: TriageAction) => {
      if (!topic) return
      setLog((prev) => [...prev, { topic, action }])
      if (current + 1 >= total) {
        setDone(true)
      } else {
        setCurrent((c) => c + 1)
      }
    },
    [topic, current, total]
  )

  const handleRestart = () => {
    setCurrent(0)
    setLog([])
    setDone(false)
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
          <span className="text-muted text-[10px] font-mono uppercase tracking-widest">
            Recent
          </span>
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
    </div>
  )
}
