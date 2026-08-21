import { ChevronRight } from 'lucide-react';
import { PanelTitle, ScreenHeading } from '../shared';

const SKILLS = [
  { label: 'Navigator', value: 88 },
  { label: 'Observer', value: 60 },
  { label: 'Calculator', value: 40 },
  { label: 'Accuracy', value: 85 },
  { label: 'Knowledge', value: 60 },
];

const REPORTS = [
  { title: 'Celestial Navigation Level 2', date: '12 May 2025', score: 85 },
  { title: 'Star Identification Drill', date: '10 May 2025', score: 90 },
  { title: 'Sextant Practice', date: '08 May 2025', score: 78 },
];

function RadarChart({ data, size = 220 }: { data: { label: string; value: number }[]; size?: number }) {
  const center = size / 2;
  const radius = size * 0.36;
  const n = data.length;
  const point = (i: number, value: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    const r = (value / 100) * radius;
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)] as const;
  };
  const polygon = data.map((d, i) => point(i, d.value).join(',')).join(' ');
  const rings = [0.25, 0.5, 0.75, 1];

  return <svg viewBox={`0 0 ${size} ${size}`} className="radar-chart">
    {rings.map((r) => <polygon key={r} points={data.map((_, i) => point(i, r * 100).join(',')).join(' ')} className="radar-ring" />)}
    {data.map((_, i) => { const [x, y] = point(i, 100); return <line key={i} x1={center} y1={center} x2={x} y2={y} className="radar-axis" />; })}
    <polygon points={polygon} className="radar-fill" />
    {data.map((d, i) => { const [x, y] = point(i, 112); return <text key={d.label} x={x} y={y} className="radar-label">{d.label}</text>; })}
  </svg>;
}

export function Reports() {
  return <div className="workspace-screen">
    <ScreenHeading eyebrow="PERFORMANCE INTELLIGENCE" title="Results & Reports" detail="Review scored performance, skill breakdowns and recent assessment reports." />
    <div className="reports-grid">
      <section className="panel">
        <PanelTitle title="Performance Overview" action="View all" />
        <div className="perf-stats">
          <div><strong>85%</strong><span>Overall Score</span></div>
          <div><strong>24</strong><span>Total Sessions</span></div>
          <div><strong>60%</strong><span>Average Score</span></div>
        </div>
        <span className="performance-tag">Great Performance</span>
      </section>

      <section className="panel">
        <PanelTitle title="Skills Breakdown" action="Details" />
        <RadarChart data={SKILLS} />
      </section>

      <section className="panel reports-list-panel">
        <PanelTitle title="Recent Reports" action="View all" />
        <div className="reports-list">
          {REPORTS.map((r) => <div className="report-row" key={r.title}>
            <div><strong>{r.title}</strong><small>{r.date}</small></div>
            <span className="report-score">{r.score}%</span>
          </div>)}
        </div>
        <button className="outline-button full-width">View Detailed Progress <ChevronRight size={15} /></button>
      </section>
    </div>
  </div>;
}
