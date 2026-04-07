'use client'

import { useState } from 'react'
import { WEEK_INFO, getTopicsByBucket, getTopicsByDay } from '@/lib/mock-data'
import BucketColumn from '@/components/BucketColumn'

type MobileTab = 'now' | 'next' | 'later'

const OVERDUE_COUNT = 1 // mock — would be derived from topics

export default function DashboardPage() {
  const nowTopics = getTopicsByBucket('now')
  const nextTopics = getTopicsByBucket('next')
  const laterTopics = getTopicsByBucket('later')
  const dayGroups = getTopicsByDay('now')
  const [mobileTab, setMobileTab] = useState<MobileTab>('now')

  const totalTopics = nowTopics.length + nextTopics.length + laterTopics.length

  const PILLS = [
    { key: 'now' as MobileTab, label: 'Now', count: nowTopics.length, dot: 'bg-overdue', dotRing: 'ring-overdue/30', text: 'text-overdue', bg: 'bg-overdue/10 hover:bg-overdue/20 border-overdue/20' },
    { key: 'next' as MobileTab, label: 'Next', count: nextTopics.length, dot: 'bg-accent', dotRing: 'ring-accent/30', text: 'text-accent', bg: 'bg-accent/10 hover:bg-accent/20 border-accent/20' },
    { key: 'later' as MobileTab, label: 'Later', count: laterTopics.length, dot: 'bg-yellow-500', dotRing: 'ring-yellow-500/30', text: 'text-yellow-400', bg: 'bg-yellow-900/20 hover:bg-yellow-900/30 border-yellow-500/20' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-5">

      {/* AI Headline — Warm Observatory beacon */}
      <div
        className="relative rounded-r-card overflow-hidden"
        style={{
          background: 'linear-gradient(to right, rgba(251,146,60,0.06), rgba(251,146,60,0.02) 60%, transparent)',
          borderLeft: '3px solid #fb923c',
          boxShadow: '0 0 24px rgba(251,146,60,0.08), inset 0 0 40px rgba(251,146,60,0.03)',
        }}
      >
        {/* Warm glow pulse */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(251,146,60,0.12), transparent)',
          }}
        />
        <div className="relative flex items-start gap-3 px-4 py-3.5">
          {/* AI pill */}
          <span
            className="flex-shrink-0 mt-0.5 text-[10px] font-mono font-bold tracking-widest px-2 py-0.5 rounded"
            style={{
              background: 'rgba(251,146,60,0.18)',
              color: '#fb923c',
              border: '1px solid rgba(251,146,60,0.35)',
              boxShadow: '0 0 8px rgba(251,146,60,0.2)',
            }}
          >
            AI
          </span>
          <p
            className="text-[15px] leading-relaxed font-medium"
            style={{ color: '#e8d5b8' }}
          >
            {WEEK_INFO.aiHeadline}
          </p>
        </div>
      </div>

      {/* Week header + stats */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-text font-bold text-xl tracking-tight">{WEEK_INFO.label}</h1>
          <span className="font-mono text-xs text-muted border border-border rounded px-1.5 py-0.5">
            {totalTopics} topics
          </span>
        </div>

        {/* Fix 5: Filter pills row */}
        <div className="flex flex-wrap gap-2">
          {/* Now pill */}
          <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border bg-overdue/10 border-overdue/25 text-overdue/90 hover:bg-overdue/20 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-overdue" />
            {nowTopics.length} Now
          </button>
          {/* Next pill */}
          <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border bg-accent/10 border-accent/25 text-accent/90 hover:bg-accent/20 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {nextTopics.length} Next
          </button>
          {/* Later pill */}
          <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border bg-yellow-900/20 border-yellow-500/25 text-yellow-400/90 hover:bg-yellow-900/30 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            {laterTopics.length} Later
          </button>
          {/* Overdue pill — pulsing red */}
          <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border bg-red-900/30 border-red-500/40 text-red-400 hover:bg-red-900/50 transition-colors">
            <span className="relative flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping absolute opacity-75" />
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 relative" />
            </span>
            {OVERDUE_COUNT} Overdue
          </button>
        </div>
      </div>

      {/* Mobile tab bar — only on small screens */}
      <div className="flex md:hidden gap-2">
        {PILLS.map((pill) => (
          <button
            key={pill.key}
            onClick={() => setMobileTab(pill.key)}
            className={`
              flex-1 flex items-center justify-center gap-1.5
              text-sm font-semibold px-3 py-2 rounded-full border transition-all
              ${mobileTab === pill.key
                ? `${pill.bg} ${pill.text} ring-1 ring-inset ${pill.dotRing}`
                : 'bg-card/50 border-border text-muted hover:bg-card'
              }
            `}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${mobileTab === pill.key ? pill.dot : 'bg-muted/40'}`} />
            {pill.label}
            <span className={`font-mono text-[11px] ${mobileTab === pill.key ? '' : 'text-muted'}`}>
              {pill.count}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile: single column view */}
      <div className="md:hidden">
        {mobileTab === 'now' && (
          <BucketColumn bucket="now" topics={nowTopics} dayGroups={dayGroups} />
        )}
        {mobileTab === 'next' && (
          <BucketColumn bucket="next" topics={nextTopics} />
        )}
        {mobileTab === 'later' && (
          <BucketColumn bucket="later" topics={laterTopics} />
        )}
      </div>

      {/* Desktop: three-column board — flex-1 columns fill space */}
      <div className="hidden md:flex gap-5 pb-4">
        {/* Now */}
        <div className="flex-1 min-w-0">
          <BucketColumn
            bucket="now"
            topics={nowTopics}
            dayGroups={dayGroups}
          />
        </div>

        {/* Divider */}
        <div className="flex-shrink-0 w-px bg-border self-stretch" />

        {/* Next */}
        <div className="flex-1 min-w-0">
          <BucketColumn bucket="next" topics={nextTopics} />
        </div>

        {/* Divider */}
        <div className="flex-shrink-0 w-px bg-border self-stretch" />

        {/* Later */}
        <div className="flex-1 min-w-0">
          <BucketColumn bucket="later" topics={laterTopics} />
        </div>
      </div>
    </div>
  )
}
