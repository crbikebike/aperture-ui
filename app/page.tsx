const variants = [
  {
    category: 'Brand Focused — Batch 3',
    description: 'First brand-guide-aligned designs: newsprint palette, Lora serif, 520px column, aperture dial, horizon fade',
    items: [
      { number: '34', name: 'Agenda Focus', file: 'variant-34-agenda-focus.html', summary: 'f/1.4 Today. Triage queue at top with Keep/Assign/Discuss/Drop actions. Today\'s plan below. Nothing from other days visible. Maximum whitespace — the deliberate absence of information is the feature.', tags: ['f/1.4 Today', 'brand-focused', 'triage'] },
      { number: '31b', name: 'Broadsheet', file: 'variant-31-broadsheet.html', summary: 'f/4 This Week. All 5 days inside a 520px column. Horizon fade: today on cotton (brightest), future on linen, past on parchment. People + Initiatives in clearly separate sections below.', tags: ['f/4 This Week', 'brand-focused', '520px column'] },
      { number: '32b', name: 'Editorial Scroll', file: 'variant-32-editorial-scroll.html', summary: 'f/4 This Week. Today as a large hero container dominating ~50% of the viewport. Other days as smaller subordinate containers below — size communicates priority.', tags: ['f/4 This Week', 'brand-focused', 'hero today'] },
      { number: '33b', name: 'Cascade Sections', file: 'variant-33-cascade-sections.html', summary: 'f/4 This Week. Five luminosity bands: cotton (today) → newsprint → linen → parchment (past). No color coding — only background brightness communicates urgency.', tags: ['f/4 This Week', 'brand-focused', 'horizon fade'] },
      { number: '36', name: 'Broadsheet Split', file: 'variant-36-broadsheet-split.html', summary: 'f/4 This Week. Two-column layout inside 560px: today\'s agenda left, people flash cards right. People as co-equal to tasks — not a sidebar, an editorial column.', tags: ['f/4 This Week', 'brand-focused', 'two-column'] },
      { number: '37', name: 'Ink Minimal', file: 'variant-37-ink-minimal.html', summary: 'f/4 This Week. Near-zero chrome. No cards, no containers — just typeset text on newsprint. Lora headers, system sans tasks. The extreme test: does this feel calming or unfinished?', tags: ['f/4 This Week', 'brand-focused', 'maximum reduction'] },
      { number: '35', name: 'Initiative Arc', file: 'variant-35-initiative-arc.html', summary: 'f/11 The Arc. Initiative cards as primary content — no day columns. SCIM Integration + Q2 Roadmap as full-width cards with health dots, topic lists, people avatars. Same data, different focal length.', tags: ['f/11 The Arc', 'brand-focused', 'initiatives'] },
    ],
  },
  {
    category: 'Wild Cards — Batch 3',
    description: 'Experimental layouts outside the editorial direction',
    items: [
      { number: '39', name: 'Pure Focus', file: 'variant-39-pure-focus.html', summary: 'f/0.95. One item. Full screen newsprint. Nothing else exists. The photographic equivalent of shooting wide open — razor-sharp foreground, everything dissolved.', tags: ['f/0.95', 'wild-card', 'focus mode'] },
      { number: '38', name: 'Time River', file: 'variant-38-time-river.html', summary: 'Vertical timeline with today anchored center. Past fades upward, future extends down. People cards float right anchored at last-interaction time. Outside the column/grid paradigm entirely.', tags: ['wild-card', 'vertical timeline', 'experimental'] },
      { number: '40', name: 'Week as Story', file: 'variant-40-week-as-story.html', summary: 'The week as editorial prose narrative. Each day is a paragraph, not a column. Done items struck through, stale in amber. Closest to a weekly memo than a calendar.', tags: ['wild-card', 'prose narrative', 'editorial'] },
    ],
  },
  {
    category: 'Iterative — Batch 2',
    description: 'Refined M-F column layouts — the most on-mark direction',
    items: [
      { number: '11', name: 'Clean Grid', file: 'variant-11-iterative.html', summary: 'Full-width 5-column grid. "Your topics" in Next uses the same visual language as day tasks. Warm paper palette with forest green accent.', tags: ['warm paper / forest green', 'Inter', 'equal columns'] },
      { number: '12', name: 'Compact Pro', file: 'variant-12-iterative.html', summary: 'Maximum density with monospace task text (JetBrains Mono) for a power-user feel. 28px fixed-height rows. 3-column Next grid.', tags: ['blue accent / off-white', 'JetBrains Mono + Inter', 'dense / terminal feel'] },
      { number: '13', name: 'Warm Editorial', file: 'variant-13-iterative.html', summary: 'Serif day headers give a "designed document" feel. Meetings as tinted cards within columns. Floating topics in a sidebar-like block in Next.', tags: ['cream / forest green', 'Source Serif 4 + Inter', 'editorial feel'] },
      { number: '14', name: 'Today-First', file: 'variant-14-iterative.html', summary: 'Today\'s column takes 40% of horizontal space — literally wider, larger text. Tabbed Next section keeps user topics and person cards in one place.', tags: ['blue accent / warm white', 'Inter', 'asymmetric focus'] },
      { number: '15', name: 'Kanban-Lite', file: 'variant-15-iterative.html', summary: 'Day columns as kanban swim lanes with count badges ("Wed 5"). Your topics lane in Next mirrors the same visual language as day lanes.', tags: ['cool gray / purple today', 'Inter', 'kanban metaphor'] },
      { number: '16', name: 'Horizon Bands', file: 'variant-16-iterative.html', summary: 'Three full-width horizontal bands (Now/Next/Later) with rotated labels on the left edge. Scrolling is literal time travel.', tags: ['white → warm gray bands', 'Inter', 'rotated labels'] },
      { number: '17', name: 'Muted Luxe', file: 'variant-17-iterative.html', summary: 'No color blocks, no heavy borders. Hairline dividers, Newsreader serif, near-white background. Feels like a well-typeset document.', tags: ['near-white / hairlines only', 'Newsreader + Inter', 'typographic minimalism'] },
      { number: '18', name: 'Dense Dashboard', file: 'variant-18-iterative.html', summary: 'Stats bar between Now and Next: "12 tasks · 7 done · 3 carried · 2 meetings left". Dark bar creates a visual break. For M6/M7 signal density.', tags: ['zebra strip / dark stats bar', 'IBM Plex Sans', 'maximum density'] },
    ],
  },
  {
    category: 'Sidebar — Batch 2',
    description: 'Persistent relationship panels — people always in view',
    items: [
      { number: '19', name: 'Sidebar Weekly', file: 'variant-19-sidebar.html', summary: 'Dark left sidebar (280px) with person cards always visible. Main area: M-F columns. People never buried below fold.', tags: ['dark slate sidebar / warm main', 'Inter', 'fixed left sidebar'] },
      { number: '20', name: 'Sidebar Hybrid', file: 'variant-20-sidebar.html', summary: 'Collapsible sidebar: 64px collapsed (avatar initials) → 320px expanded (full cards). Smooth overlay on expand.', tags: ['dark collapsed / white expanded', 'Inter', 'collapse/expand'] },
      { number: '21', name: 'Sidebar Right', file: 'variant-21-sidebar.html', summary: 'Right sidebar (30%) keeps Your Topics always in peripheral vision. Main area (70%) for M-F + initiatives. Inverted from typical left-sidebar pattern.', tags: ['white main / warm right sidebar', 'Inter', 'right sidebar'] },
      { number: '22', name: 'Sidebar Contextual', file: 'variant-22-sidebar.html', summary: 'Sidebar responds to meeting clicks. Click "1:1 w/ Maya" → Maya\'s card promotes to top, topics sorted by staleness. The killer interaction from the architecture doc.', tags: ['white sidebar / green today', 'Inter', 'contextual + reactive'] },
    ],
  },
  {
    category: 'Single-Page Scroll — Batch 2',
    description: 'Extended scroll with people and initiatives integrated',
    items: [
      { number: '23', name: 'Scroll: Newspaper', file: 'variant-23-scroll.html', summary: 'Hero headline at top, today\'s full detail as lead story, other days as secondary columns, people and topics as below-the-fold features.', tags: ['warm white / dark hero', 'Playfair Display + Inter', 'narrative scroll'] },
      { number: '24', name: 'Scroll: Timeline', file: 'variant-24-scroll.html', summary: 'Sticky vertical timeline axis with NOW/NEXT/LATER markers. Scrolling travels through time horizons with physical spatial metaphor.', tags: ['warm background / timeline markers', 'Inter', 'sticky axis'] },
      { number: '25', name: 'Scroll: Sections', file: 'variant-25-scroll.html', summary: 'Each section is a distinct card on a warm gray "desk surface." Sections feel like physical cards laid out on a table. Friendly names: "Coming Up", "On the Horizon".', tags: ['warm gray desk / white cards', 'DM Sans + Inter', 'card sections'] },
      { number: '26', name: 'Scroll: Progressive Density', file: 'variant-26-scroll.html', summary: 'Information density increases as you scroll down — spacious Now (14px), medium Next (13px), compressed Later (12px). Embodies the time-priority model physically.', tags: ['white → warm gradient', 'Inter', 'progressive compression'] },
    ],
  },
  {
    category: 'Wildcard — Batch 2',
    description: 'Functional innovations — still usable, just unexpected',
    items: [
      { number: '27', name: 'Focus Mode', file: 'variant-27-wildcard.html', summary: 'Toggle between Week View and Focus View (one item at a time, full-screen dark mode card). Context drawer shows linked person card below.', tags: ['warm week / dark focus', 'Inter', 'dual-mode toggle'] },
      { number: '28', name: 'Triage-First', file: 'variant-28-wildcard.html', summary: 'App opens to a card-stack triage queue if untriaged items exist. K-Now/A/D/T/X buttons. Dimmed week grid in background as context. Target: 12 items in 90 seconds.', tags: ['blurred grid / white triage card', 'Inter', 'triage entry point'] },
      { number: '29', name: 'Heat Map', file: 'variant-29-wildcard.html', summary: 'Day columns heat-colored by load: cool blue (empty) → warm yellow → amber → pink (packed). Load bar at top shows week distribution at a glance.', tags: ['thermal palette', 'Inter', 'workload visualization'] },
      { number: '30', name: 'Agenda + Cards', file: 'variant-30-wildcard.html', summary: 'Two equal panels: left = today\'s time-axis agenda (9–17h with red "now" indicator), right = persistent relationship context (your topics + person cards).', tags: ['white agenda / warm context panel', 'Inter', 'dual-panel split'] },
    ],
  },
  {
    category: 'Newspaper — Batch 2',
    description: 'Editorial and print-inspired takes on the original newspaper direction',
    items: [
      { number: '31', name: 'Morning Edition', file: 'variant-31-newspaper.html', summary: 'Classic broadsheet: black masthead, 3-column grid, every task as an "article" with headline + byline, meetings as breaking news boxes. Full serif editorial stack.', tags: ['newsprint cream / black masthead', 'Playfair Display + Source Serif 4', 'broadsheet'] },
      { number: '32', name: 'Weekly Magazine', file: 'variant-32-newspaper.html', summary: 'Magazine cover: navy hero with gold pull-quote, week-at-a-glance table, editorial grid. Later items as "classifieds." Person cards as profile features.', tags: ['navy hero / gold accent / cream', 'Libre Baskerville + Inter', 'magazine cover'] },
      { number: '33', name: 'Telegram Wire', file: 'variant-33-newspaper.html', summary: 'Wire service teletype aesthetic. IBM Plex Mono only. Wire codes (MTG, TSK, DUP) color-coded by type. Dense but warm when the content is personal and specific.', tags: ['old paper yellow / monospace only', 'IBM Plex Mono', 'wire service'] },
    ],
  },
  {
    category: 'Avant-Garde',
    description: 'Bold, unconventional layouts that push boundaries',
    items: [
      {
        number: '01',
        name: 'Radial Timeline',
        file: 'variant-01-avantgarde.html',
        summary: 'Days orbit a central "today" hub in concentric rings. Radial distance indicates time horizon — center is most urgent. Smooth orbital animation on load.',
        tags: ['burnt orange / gold on dark', 'Playfair Display + Source Code Pro', 'orbital layout'],
      },
      {
        number: '02',
        name: 'Overlapping Cards',
        file: 'variant-02-avantgarde.html',
        summary: 'Stacked, overlapping card deck with asymmetric layout and depth. Day columns peek from behind each other with 3D transforms on hover and floating stagger animation.',
        tags: ['cool silver / blue on light', 'GT America + IBM Plex Mono', '3D depth + parallax'],
      },
      {
        number: '03',
        name: 'Brutalist Axis',
        file: 'variant-03-avantgarde.html',
        summary: 'Geometric precision, pure monochromatic grid. Two-axis matrix (horizontal = priority, vertical = days). No curves, border-driven structure, maximum information density.',
        tags: ['black / white / yellow', 'JetBrains Mono + Courier Prime', 'data visualization'],
      },
    ],
  },
  {
    category: 'Iterative',
    description: 'Polished refinements of the M-F column pattern',
    items: [
      {
        number: '04',
        name: 'Warm Neutrals',
        file: 'variant-04-iterative.html',
        summary: 'The "notebook" feel. Sand, cream, and charcoal with warm amber accents. Serif headers give an editorial quality. Equal 5-column grid with spacious cards.',
        tags: ['sand / cream / charcoal', 'Crimson Text + Source Sans 3', 'equal-width columns'],
      },
      {
        number: '05',
        name: 'Cool Professional',
        file: 'variant-05-iterative.html',
        summary: 'Clean dashboard polish. Slate grays with blue accents on white. Modern sans-serif with monospaced time displays. Professional hierarchy, trustworthy feel.',
        tags: ['slate / blue / white', 'Outfit + IBM Plex Mono', 'dashboard aesthetic'],
      },
      {
        number: '06',
        name: 'Dark Mode',
        file: 'variant-06-iterative.html',
        summary: 'Dark background with muted cyan, lime, and orange accents. High contrast text on dark, comfortable for extended use. Technical, modern feel.',
        tags: ['dark (#0f1419) + muted accents', 'Sohne + JetBrains Mono', 'low-light optimized'],
      },
      {
        number: '07',
        name: 'High Contrast Sidebar',
        file: 'variant-07-iterative.html',
        summary: 'Bold red accent on neutral with a dark sidebar housing flash cards and backlog. 3-column day grid + right sidebar. Editorial, print-magazine energy.',
        tags: ['white / bold red / dark sidebar', 'Bricolage Grotesque + Newsreader', 'sidebar layout'],
      },
    ],
  },
  {
    category: 'Random',
    description: 'Completely unexpected, wildcard approaches',
    items: [
      {
        number: '08',
        name: 'Timeline Sequencer',
        file: 'variant-08-random.html',
        summary: 'Inspired by music production software (Ableton/DAW). Days as horizontal tracks with meetings and tasks as draggable clips positioned in time. Playhead shows current time with pulsing glow.',
        tags: ['industrial dark + neon green/pink/cyan', 'DAW interface metaphor', 'time-ruler layout'],
      },
      {
        number: '09',
        name: 'Concentric Rings',
        file: 'variant-09-random.html',
        summary: 'Days plotted as concentric rings radiating from center (today = innermost). Tasks rendered as glowing dots by day + time. People as orbital cards floating around the canvas. Abstract, zen.',
        tags: ['cosmic blues / purples / pinks', 'canvas-based rendering', 'spatial visualization'],
      },
      {
        number: '10',
        name: 'Editorial Newspaper',
        file: 'variant-10-random.html',
        summary: 'Classic print newspaper layout. Tasks and meetings as article "headlines" with bylines and status bars. Multi-column grid, serif typography, people as "columnists" in sidebar.',
        tags: ['black / cream / gold', 'Bodoni Moda + Work Sans', 'print editorial'],
      },
    ],
  },
]

const infoItems = [
  'Now: M-F day columns with meetings + tasks',
  'Today highlighted, past days dimmed',
  'Undone past tasks show amber "still open" badge',
  'Task completion: checkbox, strikethrough, 2s undo',
  'Next (2 weeks): cards without day assignment',
  'Later: compact backlog, collapsed by default',
  'Flash cards: 320px, person/initiative + topic list',
  'Triage: K-Now, A-Name, D-Name, T-Name, X',
]

export default function VariantsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 flex flex-col gap-8">
      {/* Header */}
      <div className="border-b border-border pb-5">
        <h1 className="text-2xl font-bold text-text tracking-tight mb-1">Design Variants</h1>
        <p className="text-label text-sm max-w-xl">
          43 layout explorations across 3 batches. Batch 3 (new): 7 brand-guide-aligned + 3 wild cards. Batch 2: 23 IA-focused iterations. Batch 1: 10 initial range-finding explorations.
        </p>
      </div>

      {/* Info architecture summary */}
      <div className="bg-card border border-border rounded-lg p-5">
        <h2 className="text-xs font-semibold text-muted uppercase tracking-widest mb-3">
          Shared Information Architecture
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm text-label">
          {infoItems.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-muted mt-0.5">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Original mockup */}
      <div className="flex flex-col gap-3">
        <div className="flex items-baseline gap-3 border-b border-border pb-2">
          <h2 className="text-lg font-bold text-text">Original</h2>
          <span className="text-xs text-muted">The working Now/Next/Later prototype — baseline for all variants</span>
        </div>
        <div className="bg-card border border-accent/30 rounded-lg p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-text mb-0.5">
              <span className="text-accent font-mono mr-1.5">00</span>
              Working Prototype
            </h3>
            <p className="text-sm text-label mb-2">
              The current live mockup. Three-column Now/Next/Later board with day-grouped tasks in Now, topic cards in Next and Later. Dark theme, Outfit + JetBrains Mono. The reference point all variants were designed from.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['dark canvas / accent orange', 'Outfit + JetBrains Mono', 'three-column board', 'day-grouped Now'].map((tag) => (
                <span key={tag} className="text-[11px] px-2 py-0.5 rounded bg-canvas border border-border text-muted font-mono">{tag}</span>
              ))}
            </div>
          </div>
          <a
            href="/aperture-ui/dashboard/"
            className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2 bg-accent text-white text-sm font-medium rounded-btn hover:bg-accent/90 transition-colors"
          >
            View
          </a>
        </div>
      </div>

      {/* Categories */}
      {variants.map((cat) => (
        <div key={cat.category} className="flex flex-col gap-3">
          <div className="flex items-baseline gap-3 border-b border-border pb-2">
            <h2 className="text-lg font-bold text-text">{cat.category}</h2>
            <span className="text-xs text-muted">{cat.description}</span>
          </div>

          {cat.items.map((v) => (
            <div
              key={v.number}
              className="bg-card border border-border rounded-lg p-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:border-label/30 transition-colors"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-text mb-0.5">
                  <span className="text-muted font-mono mr-1.5">{v.number}</span>
                  {v.name}
                </h3>
                <p className="text-sm text-label mb-2">{v.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {v.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded bg-canvas border border-border text-muted font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={`/aperture-ui/design-variants/${v.file}`}
                className="flex-shrink-0 inline-flex items-center justify-center px-4 py-2 bg-accent text-white text-sm font-medium rounded-btn hover:bg-accent/90 transition-colors"
              >
                View
              </a>
            </div>
          ))}
        </div>
      ))}

      {/* Footer note */}
      <div className="text-center text-[11px] text-muted font-mono pt-4 border-t border-border">
        Aperture Flow v1 Design Exploration — April 2026
      </div>
    </div>
  )
}
