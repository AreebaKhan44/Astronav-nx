import { Compass, Eye, Target, Zap } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { PanelTitle, ScreenHeading } from '../shared';

const COURSE_PROGRESS = [
  { label: 'Celestial Navigation Level 1', value: 75 },
  { label: 'Celestial Navigation Level 2', value: 40 },
  { label: 'Astronomy Fundamentals', value: 100 },
  { label: 'Space & Galaxies Exploration', value: 25 },
];

const SKILLS = [
  { icon: Compass, label: 'Navigator', value: 88 },
  { icon: Eye, label: 'Observer', value: 66 },
  { icon: Target, label: 'Calculator', value: 40 },
  { icon: Zap, label: 'Accuracy', value: 60 },
];

export function ProgressScreen() {
  return <div className="workspace-screen">
    <ScreenHeading eyebrow="TRAINING ANALYTICS" title="My Progress" detail="Track completion, course-by-course progress and skill growth over time." />
    <div className="progress-screen-grid">
      <section className="panel">
        <PanelTitle title="Overall Progress" action="View Detailed Progress" />
        <div className="progress-content centered">
          <div className="ring-chart large"><div><strong>72%</strong><span>Completed</span></div></div>
          <div className="progress-legend">
            <div><i className="blue-dot" />Completed <b>18</b></div>
            <div><i className="gray-dot" />In Progress <b>12</b></div>
            <div><i className="light-dot" />Not Started <b>06</b></div>
            <div><i className="dark-dot" />Total Courses <b>36</b></div>
          </div>
        </div>
      </section>

      <section className="panel">
        <PanelTitle title="Course Progress" action="View all" />
        <div className="bar-list">
          {COURSE_PROGRESS.map((c) => <div className="bar-row" key={c.label}>
            <div className="bar-row-head"><span>{c.label}</span><b>{c.value}%</b></div>
            <div className="course-progress-bar"><i style={{ width: `${c.value}%` }} /></div>
          </div>)}
        </div>
      </section>

      <section className="panel skills-panel">
        <PanelTitle title="Skills Overview" action="Details" />
        <div className="skills-grid">
          {SKILLS.map(({ icon: Icon, label, value }) => <div className="skill-chip" key={label}>
            <span className="skill-icon"><Icon size={20} /></span>
            <strong>{value}%</strong>
            <small>{label}</small>
          </div>)}
        </div>
        <button className="blue-button">View Detailed Progress <ChevronRight size={15} /></button>
      </section>
    </div>
  </div>;
}
