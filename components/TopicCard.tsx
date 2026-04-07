'use client'

import type { Topic } from '@/lib/types'
import { ageDays, getPersonById } from '@/lib/mock-data'

const KIND_LABEL: Record<Topic['kind'], string> = {
  task: '◻ Task',
  discussion: '◎ Discuss',
  note: '◈ Note',
}

const KIND_COLOR: Record<Topic['kind'], string> = {
  task: 'text-accent',
  discussion: 'text-purple-400',
  note: 'text-yellow-400',
}

function AgeBadge({ createdAt, status }: { createdAt: string; status: Topic['status'] }) {
  const days = ageDays(createdAt)
  const isOverdue = status === 'overdue' || days > 5
  return (
    <span
      className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
        isOverdue ? 'bg-red-900/60 text-overdue' : 'bg-gray-700 text-muted'
      }`}
    >
      {days === 0 ? 'today' : `${days}d`}
    </span>
  )
}

export default function TopicCard({ topic }: { topic: Topic }) {
  const people = topic.personIds.map(getPersonById).filter(Boolean)

  return (
    <div
      className={`
        w-full bg-card rounded-card shadow-card border
        ${topic.status === 'overdue' ? 'border-overdue/40' : 'border-border'}
        hover:bg-card-hover hover:shadow-card-hover
        transition-all duration-150 cursor-pointer
        px-4 py-3 flex flex-col gap-2
      `}
    >
      {/* Top row: kind + age */}
      <div className="flex items-center justify-between">
        <span className={`text-[11px] font-medium tracking-wide ${KIND_COLOR[topic.kind]}`}>
          {KIND_LABEL[topic.kind]}
        </span>
        <AgeBadge createdAt={topic.createdAt} status={topic.status} />
      </div>

      {/* Title — single line, truncated */}
      <p className="text-text text-sm font-medium leading-snug truncate" title={topic.title}>
        {topic.title}
      </p>

      {/* Note preview if present */}
      {topic.note && (
        <p className="text-label text-xs leading-relaxed line-clamp-2">{topic.note}</p>
      )}

      {/* Footer: avatars */}
      {people.length > 0 && (
        <div className="flex items-center gap-1.5 mt-0.5">
          {people.map((p) => (
            <span
              key={p!.id}
              title={p!.name}
              className="w-5 h-5 rounded-full bg-accent/20 text-accent text-[9px] font-bold flex items-center justify-center ring-1 ring-accent/30"
            >
              {p!.avatarInitials.slice(0, 1)}
            </span>
          ))}
          {people.length > 1 && (
            <span className="text-muted text-[10px] font-mono">
              {people.map((p) => p!.name.split(' ')[0]).join(', ')}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
