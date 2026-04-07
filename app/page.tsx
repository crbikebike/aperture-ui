import { WEEK_INFO, getTopicsByBucket, getTopicsByDay } from '@/lib/mock-data'
import BucketColumn from '@/components/BucketColumn'

export default function DashboardPage() {
  const nowTopics = getTopicsByBucket('now')
  const nextTopics = getTopicsByBucket('next')
  const laterTopics = getTopicsByBucket('later')
  const dayGroups = getTopicsByDay('now')

  const totalTopics = nowTopics.length + nextTopics.length + laterTopics.length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
      {/* Week header */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-text font-bold text-xl tracking-tight">{WEEK_INFO.label}</h1>
            <span className="font-mono text-xs text-muted border border-border rounded px-1.5 py-0.5">
              {totalTopics} topics
            </span>
          </div>
          {/* AI Headline */}
          <div className="mt-2 flex items-start gap-2">
            <span className="flex-shrink-0 text-[10px] font-mono text-accent/70 uppercase tracking-widest mt-px">
              AI·
            </span>
            <p className="text-text-secondary text-sm leading-relaxed">{WEEK_INFO.aiHeadline}</p>
          </div>
        </div>
      </div>

      {/* Three-column board */}
      <div className="flex gap-5 overflow-x-auto pb-4">
        {/* Now */}
        <div className="flex-shrink-0 w-[320px]">
          <BucketColumn
            bucket="now"
            topics={nowTopics}
            dayGroups={dayGroups}
          />
        </div>

        {/* Divider */}
        <div className="flex-shrink-0 w-px bg-border self-stretch" />

        {/* Next */}
        <div className="flex-shrink-0 w-[320px]">
          <BucketColumn bucket="next" topics={nextTopics} />
        </div>

        {/* Divider */}
        <div className="flex-shrink-0 w-px bg-border self-stretch" />

        {/* Later */}
        <div className="flex-shrink-0 w-[320px]">
          <BucketColumn bucket="later" topics={laterTopics} />
        </div>
      </div>
    </div>
  )
}
