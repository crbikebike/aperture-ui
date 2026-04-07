const variants = [
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
          10 layout explorations for the v1 native app. Same information architecture, different visual approaches. 3 avant-garde, 4 iterative, 3 completely random.
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
