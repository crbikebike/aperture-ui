'use client'

import { useState } from 'react'
import type { Topic } from '@/lib/types'
import { ageDays, getPersonById, INITIATIVES } from '@/lib/mock-data'

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
  const [expanded, setExpanded] = useState(false)
  const people = topic.personIds.map(getPersonById).filter(Boolean)
  const initiative = topic.initiativeId
    ? INITIATIVES.find((i) => i.id === topic.initiativeId)
    : undefined
  const days = ageDays(topic.createdAt)

  return (
    <div className="flex flex-col">
      {/* Card */}
      <div
        onClick={() => setExpanded((v) => !v)}
        className={`
          w-full bg-card rounded-card shadow-card border
          ${topic.status === 'overdue' ? 'border-overdue/40' : 'border-border'}
          ${expanded ? 'border-accent/40 bg-card-hover shadow-card-hover' : 'hover:bg-card-hover hover:shadow-card-hover'}
          transition-all duration-150 cursor-pointer
          px-4 py-3 flex flex-col gap-2
        `}
      >
        {/* Top row: kind + age */}
        <div className="flex items-center justify-between">
          <span className={`text-[11px] font-medium tracking-wide ${KIND_COLOR[topic.kind]}`}>
            {KIND_LABEL[topic.kind]}
          </span>
          <div className="flex items-center gap-2">
            <AgeBadge createdAt={topic.createdAt} status={topic.status} />
            <span className={`text-muted text-[10px] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}>
              ▾
            </span>
          </div>
        </div>

        {/* Title — single line when collapsed, full when expanded */}
        <p
          className={`text-text text-sm font-medium leading-snug ${expanded ? '' : 'truncate'}`}
          title={expanded ? undefined : topic.title}
        >
          {topic.title}
        </p>

        {/* Note preview if present — collapsed */}
        {!expanded && topic.note && (
          <p className="text-label text-xs leading-relaxed line-clamp-2">{topic.note}</p>
        )}

        {/* Footer: avatars — collapsed */}
        {!expanded && people.length > 0 && (
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
            {people.length > 0 && (
              <span className="text-muted text-[10px] font-mono">
                {people.map((p) => p!.name.split(' ')[0]).join(', ')}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Expanded detail panel */}
      {expanded && (
        <div className="border border-t-0 border-accent/30 rounded-b-card bg-[#161f30] px-4 py-4 flex flex-col gap-3">
          {/* Full note */}
          {topic.note && (
            <div>
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Note</span>
              <p className="text-text-secondary text-xs leading-relaxed mt-1 border-l-2 border-accent/30 pl-2.5">
                {topic.note}
              </p>
            </div>
          )}

          {/* People — full names */}
          {people.length > 0 && (
            <div>
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">People</span>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {people.map((p) => (
                  <div key={p!.id} className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-accent/20 text-accent text-[9px] font-bold flex items-center justify-center ring-1 ring-accent/30">
                      {p!.avatarInitials.slice(0, 1)}
                    </span>
                    <span className="text-text-secondary text-xs">{p!.name}</span>
                    <span className="text-muted text-[10px]">· {p!.role}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Initiative */}
          {initiative && (
            <div>
              <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Initiative</span>
              <p className="text-accent text-xs mt-1">{initiative.name}</p>
            </div>
          )}

          {/* Age */}
          <div>
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Age</span>
            <p className="text-text-secondary text-xs mt-1">
              {days === 0 ? 'Created today' : `${days} day${days !== 1 ? 's' : ''} old`}
              {topic.status === 'overdue' && (
                <span className="ml-2 text-overdue font-mono text-[10px]">· overdue</span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
