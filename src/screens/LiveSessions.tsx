import { useState } from 'react';
import { ChevronLeft, ChevronRight, Radio } from 'lucide-react';
import { PanelTitle, ScreenHeading } from '../shared';

const UPCOMING = [
  { title: 'Astronomy Fundamentals', date: '16 May, 2025 \u00b7 10:00 AM', live: true },
  { title: 'Sextant Calibration Drill', date: '17 May, 2025 \u00b7 08:00 PM', live: false },
  { title: 'Galaxy Mapping Workshop', date: '20 May, 2025 \u00b7 11:00 AM', live: false },
];

export function LiveSessions() {
  const [month] = useState('May 2025');
  const highlighted = 15;
  const weeks = [[undefined, undefined, undefined, 1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 11], [12, 13, 14, 15, 16, 17, 18], [19, 20, 21, 22, 23, 24, 25], [26, 27, 28, 29, 30, 31, undefined]];

  return <div className="workspace-screen">
    <ScreenHeading eyebrow="INSTRUCTOR-LED TRAINING" title="Live Sessions" detail="Join scheduled sessions or review what's coming up this month." />
    <div className="live-layout">
      <section className="panel live-current">
        <div className="live-current-head"><span>Celestial Navigation Level 2</span><span className="live-badge"><Radio size={12} /> LIVE</span></div>
        <p>Instructor: Cdr. Omar Farooq</p>
        <button className="blue-button">Join Live Session <ChevronRight size={15} /></button>

        <div className="side-section-label secondary-label">SESSION CALENDAR</div>
        <div className="mini-calendar">
          <div className="mini-cal-head"><button><ChevronLeft size={14} /></button><span>{month}</span><button><ChevronRight size={14} /></button></div>
          <div className="mini-cal-grid mini-cal-labels"><span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span></div>
          {weeks.map((w, i) => <div className="mini-cal-grid" key={i}>{w.map((d, j) => <span key={j} className={d === highlighted ? 'today' : d ? '' : 'muted'}>{d ?? ''}</span>)}</div>)}
        </div>
      </section>

      <section className="panel">
        <PanelTitle title="Upcoming Sessions" action="View calendar" />
        <div className="upcoming-list">
          {UPCOMING.map((s) => <div className="upcoming-row" key={s.title}>
            <div><strong>{s.title}</strong><small>{s.date}</small></div>
            <button className={s.live ? 'blue-button small' : 'outline-button small'}>{s.live ? 'Join' : 'Join'}</button>
          </div>)}
        </div>
      </section>
    </div>
  </div>;
}
