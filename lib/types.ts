export type Bucket = 'now' | 'next' | 'later'
export type TopicKind = 'task' | 'discussion' | 'note'
export type TopicStatus = 'open' | 'done' | 'overdue'

export interface Topic {
  id: string
  title: string
  kind: TopicKind
  bucket: Bucket
  status: TopicStatus
  /** ISO date string when the topic was created */
  createdAt: string
  /** Day label for Now-bucket grouping: 'Mon' | 'Tue' | ... */
  day?: string
  /** People IDs linked to this topic */
  personIds: string[]
  /** Initiative ID if any */
  initiativeId?: string
  /** Brief context note */
  note?: string
}

export interface Person {
  id: string
  name: string
  role: string
  /** Topic IDs linked to this person */
  topicIds: string[]
  avatarInitials: string
}

export interface Initiative {
  id: string
  name: string
  description: string
  topicIds: string[]
}

export interface WeekInfo {
  label: string
  startDate: string
  endDate: string
  aiHeadline: string
}
