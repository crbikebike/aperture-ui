import type { Topic, Person, Initiative, WeekInfo } from './types'

export const WEEK_INFO: WeekInfo = {
  label: 'Week of Mar 31 – Apr 4, 2026',
  startDate: '2026-03-31',
  endDate: '2026-04-04',
  aiHeadline:
    'Three items need decisions before Thursday; sync with Maya unblocks the mobile launch.',
}

export const TOPICS: Topic[] = [
  // --- NOW ---
  {
    id: 't1',
    title: 'Finalize onboarding copy for v2 launch',
    kind: 'task',
    bucket: 'now',
    status: 'overdue',
    createdAt: '2026-03-28T09:00:00Z',
    day: 'Mon',
    personIds: ['p1', 'p2'],
    initiativeId: 'i1',
    note: 'Copy doc is in Notion — needs final sign-off from Parker.',
  },
  {
    id: 't2',
    title: 'Review Stripe webhook error logs',
    kind: 'task',
    bucket: 'now',
    status: 'open',
    createdAt: '2026-03-31T08:15:00Z',
    day: 'Mon',
    personIds: ['p3'],
    note: 'Seeing ~2% failure rate on subscription renewals since Friday deploy.',
  },
  {
    id: 't3',
    title: 'Sync with Maya on mobile nav redesign',
    kind: 'discussion',
    bucket: 'now',
    status: 'open',
    createdAt: '2026-04-01T10:00:00Z',
    day: 'Tue',
    personIds: ['p2'],
    initiativeId: 'i2',
  },
  {
    id: 't4',
    title: 'Ship triage UI to staging',
    kind: 'task',
    bucket: 'now',
    status: 'open',
    createdAt: '2026-04-01T14:00:00Z',
    day: 'Tue',
    personIds: ['p1', 'p4'],
    initiativeId: 'i1',
  },
  {
    id: 't5',
    title: 'Draft Q2 OKRs — first pass',
    kind: 'note',
    bucket: 'now',
    status: 'open',
    createdAt: '2026-04-02T09:30:00Z',
    day: 'Wed',
    personIds: ['p1'],
    note: 'Board review is Apr 10. Keep it tight: 3 objectives max.',
  },
  // --- NEXT ---
  {
    id: 't6',
    title: 'Design data export flow (CSV + JSON)',
    kind: 'task',
    bucket: 'next',
    status: 'open',
    createdAt: '2026-03-25T11:00:00Z',
    personIds: ['p2', 'p4'],
    initiativeId: 'i2',
  },
  {
    id: 't7',
    title: 'User interview — power user cohort (5 sessions)',
    kind: 'discussion',
    bucket: 'next',
    status: 'open',
    createdAt: '2026-03-27T16:00:00Z',
    personIds: ['p2', 'p5'],
    note: 'Recruit via in-app prompt. Calendly link ready.',
  },
  {
    id: 't8',
    title: 'Spike: real-time collab via CRDT',
    kind: 'note',
    bucket: 'next',
    status: 'open',
    createdAt: '2026-03-29T13:00:00Z',
    personIds: ['p3', 'p4'],
    initiativeId: 'i2',
  },
  // --- LATER ---
  {
    id: 't9',
    title: 'Explore enterprise SSO (SAML / OIDC)',
    kind: 'task',
    bucket: 'later',
    status: 'open',
    createdAt: '2026-03-10T10:00:00Z',
    personIds: ['p3'],
    initiativeId: 'i1',
    note: 'Gated on 3 enterprise inbounds confirming interest.',
  },
  {
    id: 't10',
    title: 'Rebrand assets — icon refresh',
    kind: 'note',
    bucket: 'later',
    status: 'open',
    createdAt: '2026-03-15T09:00:00Z',
    personIds: ['p5'],
    note: 'Designer quote received. Budget approval needed.',
  },
]

export const PEOPLE: Person[] = [
  {
    id: 'p1',
    name: 'Parker',
    role: 'Product Owner',
    topicIds: ['t1', 't4', 't5'],
    avatarInitials: 'PK',
  },
  {
    id: 'p2',
    name: 'Maya Chen',
    role: 'Design Lead',
    topicIds: ['t1', 't3', 't6', 't7'],
    avatarInitials: 'MC',
  },
  {
    id: 'p3',
    name: 'Jordan Reyes',
    role: 'Backend Engineer',
    topicIds: ['t2', 't8', 't9'],
    avatarInitials: 'JR',
  },
  {
    id: 'p4',
    name: 'Sam Okafor',
    role: 'Frontend Engineer',
    topicIds: ['t4', 't6', 't8'],
    avatarInitials: 'SO',
  },
  {
    id: 'p5',
    name: 'Lee Park',
    role: 'Growth & Research',
    topicIds: ['t7', 't10'],
    avatarInitials: 'LP',
  },
]

export const INITIATIVES: Initiative[] = [
  {
    id: 'i1',
    name: 'v2 Launch',
    description: 'Full product launch with onboarding overhaul and enterprise-ready auth.',
    topicIds: ['t1', 't4', 't9'],
  },
  {
    id: 'i2',
    name: 'Mobile & Collab',
    description: 'Redesigned mobile nav, data export, and real-time collaboration primitives.',
    topicIds: ['t3', 't6', 't8'],
  },
]

/** Topics that need triage (open, not yet bucketed or needs re-evaluation) */
export const TRIAGE_QUEUE: Topic[] = [
  {
    id: 'tq1',
    title: 'Follow up: legal review of ToS update',
    kind: 'task',
    bucket: 'untriaged',
    status: 'open',
    createdAt: '2026-04-01T07:00:00Z',
    personIds: ['p1'],
    note: 'External counsel sent v2 redlines. Need to respond within 5 business days.',
  },
  {
    id: 'tq2',
    title: 'Audit analytics events for GDPR compliance',
    kind: 'task',
    bucket: 'untriaged',
    status: 'open',
    createdAt: '2026-03-28T11:00:00Z',
    personIds: ['p3', 'p4'],
  },
  {
    id: 'tq3',
    title: 'Add dark-mode toggle to settings page',
    kind: 'task',
    bucket: 'untriaged',
    status: 'open',
    createdAt: '2026-03-30T15:30:00Z',
    personIds: ['p4'],
    note: 'User request with 12 upvotes in the feedback board.',
  },
  {
    id: 'tq4',
    title: 'Sync with Lee on NPS survey timing',
    kind: 'discussion',
    bucket: 'untriaged',
    status: 'open',
    createdAt: '2026-04-02T08:00:00Z',
    personIds: ['p5'],
  },
  {
    id: 'tq5',
    title: 'Evaluate Posthog vs Amplitude for analytics',
    kind: 'note',
    bucket: 'untriaged',
    status: 'open',
    createdAt: '2026-03-20T10:00:00Z',
    personIds: ['p1', 'p5'],
  },
]

export function getTopicsByBucket(bucket: Topic['bucket']): Topic[] {
  return TOPICS.filter((t) => t.bucket === bucket)
}

export function getTopicsByDay(bucket: 'now'): Record<string, Topic[]> {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const result: Record<string, Topic[]> = {}
  for (const day of days) {
    const dayTopics = TOPICS.filter((t) => t.bucket === bucket && t.day === day)
    if (dayTopics.length > 0) result[day] = dayTopics
  }
  return result
}

export function getPersonById(id: string): Person | undefined {
  return PEOPLE.find((p) => p.id === id)
}

export function getTopicById(id: string): Topic | undefined {
  return [...TOPICS, ...TRIAGE_QUEUE].find((t) => t.id === id)
}

export function ageDays(createdAt: string): number {
  const created = new Date(createdAt)
  const now = new Date('2026-04-02T12:00:00Z')
  return Math.floor((now.getTime() - created.getTime()) / (1000 * 60 * 60 * 24))
}
