import { PEOPLE, INITIATIVES } from '@/lib/mock-data'
import PersonCard from '@/components/PersonCard'

export default function PeoplePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-text font-bold text-xl tracking-tight">People</h1>
        <p className="text-muted text-sm mt-1">
          {PEOPLE.length} team members · click a card to see their active topics
        </p>
      </div>

      {/* People grid */}
      <section>
        <h2 className="text-label text-xs font-mono uppercase tracking-widest mb-3">
          Team members
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PEOPLE.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>
      </section>

      {/* Initiatives sidebar-style */}
      <section>
        <h2 className="text-label text-xs font-mono uppercase tracking-widest mb-3">
          Initiatives
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {INITIATIVES.map((initiative) => (
            <div
              key={initiative.id}
              className="bg-card rounded-card border border-border shadow-card px-4 py-4 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-text font-semibold text-sm">{initiative.name}</h3>
                <span className="flex-shrink-0 font-mono text-xs text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                  {initiative.topicIds.length} topics
                </span>
              </div>
              <p className="text-label text-xs leading-relaxed">{initiative.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
