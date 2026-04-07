'use client'

import { useState } from 'react'
import type { Person } from '@/lib/types'
import { getTopicById } from '@/lib/mock-data'

const KIND_ICON: Record<string, string> = {
  task: '◻',
  discussion: '◎',
  note: '◈',
}

const BUCKET_COLOR: Record<string, string> = {
  now: 'text-overdue',
  next: 'text-accent',
  later: 'text-yellow-400',
}

export default function PersonCard({ person }: { person: Person }) {
  const [expanded, setExpanded] = useState(false)
  const topics = person.topicIds.map(getTopicById).filter(Boolean)

  return (
    <div
      className={`
        bg-card rounded-card shadow-card border border-border
        transition-all duration-200
        ${expanded ? 'shadow-card-hover' : ''}
      `}
    >
      {/* Header — always visible, clickable */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-card-hover rounded-card transition-colors"
        aria-expanded={expanded}
      >
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/40 to-purple-500/40 flex items-center justify-center text-text font-bold text-sm ring-1 ring-white/10 flex-shrink-0">
          {person.avatarInitials}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-text font-semibold text-sm truncate">{person.name}</p>
          <p className="text-muted text-xs truncate">{person.role}</p>
        </div>

        {/* Topic count badge */}
        <span className="flex-shrink-0 bg-accent/20 text-accent text-xs font-mono font-semibold px-2 py-0.5 rounded-full">
          {topics.length}
        </span>

        {/* Expand chevron */}
        <span
          className={`flex-shrink-0 text-muted text-xs transition-transform duration-200 ${
            expanded ? 'rotate-180' : ''
          }`}
        >
          ▾
        </span>
      </button>

      {/* Expanded topic list */}
      {expanded && (
        <div className="border-t border-border px-4 pb-4 pt-3 flex flex-col gap-2">
          {topics.length === 0 && (
            <p className="text-muted text-xs">No topics linked.</p>
          )}
          {topics.map((topic) => (
            <div
              key={topic!.id}
              className="flex items-start gap-2 text-xs text-text-secondary"
            >
              <span className={`flex-shrink-0 mt-px ${BUCKET_COLOR[topic!.bucket]}`}>
                {KIND_ICON[topic!.kind]}
              </span>
              <span className="flex-1 truncate" title={topic!.title}>
                {topic!.title}
              </span>
              <span
                className={`flex-shrink-0 font-mono text-[10px] uppercase tracking-wide ${
                  BUCKET_COLOR[topic!.bucket]
                }`}
              >
                {topic!.bucket}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
