'use client'

import { useEffect } from 'react'
import type { Topic } from '@/lib/types'
import { ageDays, getPersonById } from '@/lib/mock-data'

export type TriageAction = 'know' | 'assign' | 'transfer' | 'dismiss'

interface TriageCardProps {
  topic: Topic
  current: number
  total: number
  onAction: (action: TriageAction) => void
}

const KIND_LABEL: Record<Topic['kind'], string> = {
  task: '◻ Task',
  discussion: '◎ Discussion',
  note: '◈ Note',
}

const KIND_COLOR: Record<Topic['kind'], string> = {
  task: 'text-accent',
  discussion: 'text-purple-400',
  note: 'text-yellow-400',
}

const BUCKET_BADGE: Record<Topic['bucket'], string> = {
  now: 'bg-red-900/50 text-overdue border-overdue/30',
  next: 'bg-blue-900/50 text-accent border-accent/30',
  later: 'bg-yellow-900/30 text-yellow-400 border-yellow-500/30',
}

interface ActionButtonProps {
  label: string
  shortcut: string
  onClick: () => void
  color: string
}

function ActionButton({ label, shortcut, onClick, color }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-1 flex flex-col items-center justify-center gap-1
        px-3 py-3 rounded-btn border transition-all duration-150
        hover:scale-105 active:scale-95 cursor-pointer
        ${color}
      `}
    >
      <span className="font-semibold text-sm leading-none">{label}</span>
      <span className="font-mono text-[10px] opacity-60">[{shortcut}]</span>
    </button>
  )
}

export default function TriageCard({ topic, current, total, onAction }: TriageCardProps) {
  const people = topic.personIds.map(getPersonById).filter(Boolean)
  const days = ageDays(topic.createdAt)

  // Keyboard shortcuts
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      // Don't fire if typing in an input
      if ((e.target as HTMLElement).tagName === 'INPUT') return
      switch (e.key.toLowerCase()) {
        case 'k':
          onAction('know')
          break
        case 'a':
          onAction('assign')
          break
        case 't':
          onAction('transfer')
          break
        case 'x':
        case 'escape':
          onAction('dismiss')
          break
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onAction])

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      {/* Progress */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${(current / total) * 100}%` }}
          />
        </div>
        <span className="font-mono text-xs text-muted whitespace-nowrap">
          {current} of {total}
        </span>
      </div>

      {/* Card face */}
      <div className="bg-card rounded-card shadow-card-hover border border-border p-5 flex flex-col gap-4">
        {/* Kind + bucket + age */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-semibold ${KIND_COLOR[topic.kind]}`}>
            {KIND_LABEL[topic.kind]}
          </span>
          <span
            className={`text-[10px] font-mono uppercase tracking-wide px-1.5 py-0.5 rounded border ${
              BUCKET_BADGE[topic.bucket]
            }`}
          >
            {topic.bucket}
          </span>
          <span className="ml-auto font-mono text-[10px] text-muted">
            {days === 0 ? 'today' : `${days}d ago`}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-text text-lg font-semibold leading-snug">{topic.title}</h2>

        {/* Note */}
        {topic.note && (
          <p className="text-label text-sm leading-relaxed border-l-2 border-border pl-3">
            {topic.note}
          </p>
        )}

        {/* People */}
        {people.length > 0 && (
          <div className="flex items-center gap-2 pt-1">
            <span className="text-muted text-xs">With:</span>
            {people.map((p) => (
              <div key={p!.id} className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-[9px] font-bold flex items-center justify-center ring-1 ring-accent/30">
                  {p!.avatarInitials.slice(0, 1)}
                </span>
                <span className="text-text-secondary text-xs">{p!.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        <ActionButton
          label="K·Now"
          shortcut="K"
          onClick={() => onAction('know')}
          color="bg-green-900/30 border-done/30 text-done hover:bg-green-900/50"
        />
        <ActionButton
          label="A→"
          shortcut="A"
          onClick={() => onAction('assign')}
          color="bg-blue-900/30 border-accent/30 text-accent hover:bg-blue-900/50"
        />
        <ActionButton
          label="T→"
          shortcut="T"
          onClick={() => onAction('transfer')}
          color="bg-purple-900/30 border-purple-400/30 text-purple-400 hover:bg-purple-900/50"
        />
        <ActionButton
          label="✕"
          shortcut="X"
          onClick={() => onAction('dismiss')}
          color="bg-red-900/20 border-overdue/30 text-overdue hover:bg-red-900/40"
        />
      </div>

      {/* Keyboard hint */}
      <p className="text-center text-muted text-[11px] font-mono">
        K · A · T · X or Esc — keyboard shortcuts active
      </p>
    </div>
  )
}
