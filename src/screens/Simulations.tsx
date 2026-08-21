import { Box, Compass, Globe2, Orbit, Star, Telescope } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { ScreenHeading } from '../shared';

const SIMULATIONS = [
  { icon: Star, title: 'Star Identification', progress: 75, tone: 'tone-blue' },
  { icon: Orbit, title: 'Solar System', progress: 100, tone: 'tone-green', done: true },
  { icon: Globe2, title: 'Galaxy Exploration', progress: 25, tone: 'tone-purple' },
  { icon: Compass, title: 'Virtual Sky Navigation', progress: 70, tone: 'tone-orange' },
  { icon: Telescope, title: 'Night Sky Observation', progress: 60, tone: 'tone-blue' },
  { icon: Box, title: 'Sextant Practice', progress: 40, tone: 'tone-purple' },
];

export function Simulations() {
  return <div className="workspace-screen">
    <ScreenHeading eyebrow="HANDS-ON PRACTICE" title="Simulations" detail="Reinforce theory with guided, interactive simulation exercises." />
    <section className="panel">
      <div className="panel-title"><h3>AI Simulations</h3></div>
      <div className="sim-grid">
        {SIMULATIONS.map(({ icon: Icon, title, progress, tone, done }) => <div className={`sim-card ${tone}`} key={title}>
          <div className="sim-card-thumb"><Icon size={26} /></div>
          <strong>{title}</strong>
          <div className="course-progress-row"><div className="course-progress-bar"><i style={{ width: `${progress}%` }} /></div><span>{progress}%</span></div>
          {done && <span className="completed-tag">Completed</span>}
        </div>)}
      </div>
      <button className="outline-button full-width">View All Simulations <ChevronRight size={15} /></button>
    </section>
  </div>;
}
