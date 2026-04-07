'use client'

import type { Topic } from '@/lib/types'
import TopicCard from './TopicCard'

interface BucketColumnProps {
  bucket: 'now' | 'next' | 'later'
  topics: Topic[]
  /** For the Now column, provide day-grouped topics */
  dayGroups?: Record<string, Topic[]>
}

const BUCKET_META = {
  now: {
    label: 'Now',
    sub: 'This week · active',
    dot: 'bg-overdue',
    headerBorder: 'border-overdue/50',
  },
  next: {
    label: 'Next',
    sub: 'Coming up · queued',
    dot: 'bg-accent',
    headerBorder: 'border-accent/50',
  },
  later: {
    label: 'Later',
    sub: 'Backlog · low urgency',
    dot: 'bg-yellow-500',
    headerBorder: 'border-yellow-500/50',
  },
}

export default function BucketColumn({ bucket, topics, dayGroups }: BucketColumnProps) {
  const meta = BUCKET_META[bucket]

  return (
    <div className="flex flex-col gap-3 min-w-0 w-full max-w-[340px]">
      {/* Column header */}
      <div className={`border-b pb-2 ${meta.headerBorder}`}>
        <div className="flex items-center gap-2">
          <span className={`w-2 h-2 rounded-full ${meta.dot}`} />
          <h2 className="text-text font-semibold text-base tracking-tight">{meta.label}</h2>
          <span className="ml-auto font-mono text-xs text-muted">{topics.length}</span>
        </div>
        <p className="text-[11px] text-muted mt-0.5 ml-4">{meta.sub}</p>
      </div>

      {/* Cards */}
      {bucket === 'now' && dayGroups ? (
        <div className="flex flex-col gap-4">
          {Object.entries(dayGroups).map(([day, dayTopics]) => (
            <div key={day} className="flex flex-col gap-2">
              <span className="text-[10px] font-mono font-semibold text-muted uppercase tracking-widest px-1">
                — {day} —
              </span>
              {dayTopics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {topics.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      )}

      {topics.length === 0 && (
        <div className="rounded-card border border-dashed border-border px-4 py-6 text-center text-muted text-sm">
          Nothing here yet
        </div>
      )}
    </div>
  )
}
