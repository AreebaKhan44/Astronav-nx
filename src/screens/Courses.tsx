import { useMemo, useState } from 'react';
import { Grid2x2, List, Search } from 'lucide-react';
import { ScreenHeading } from '../shared';

type Course = { title: string; level: 'Beginner' | 'Intermediate' | 'Advanced'; category: string; progress: number; status: 'Continue' | 'Completed' | 'Start'; tone: string };

const COURSES: Course[] = [
  { title: 'Celestial Navigation Level 1', level: 'Beginner', category: 'Navigation', progress: 75, status: 'Continue', tone: 'tone-blue' },
  { title: 'Celestial Navigation Level 2', level: 'Intermediate', category: 'Navigation', progress: 40, status: 'Continue', tone: 'tone-orange' },
  { title: 'Astronomy Fundamentals', level: 'Beginner', category: 'Astronomy', progress: 100, status: 'Completed', tone: 'tone-green' },
  { title: 'Space & Galaxies Exploration', level: 'Advanced', category: 'Astronomy', progress: 25, status: 'Continue', tone: 'tone-purple' },
  { title: 'Sextant & Instrumentation', level: 'Intermediate', category: 'Navigation', progress: 60, status: 'Continue', tone: 'tone-blue' },
  { title: 'Star Identification Mastery', level: 'Beginner', category: 'Astronomy', progress: 90, status: 'Continue', tone: 'tone-orange' },
  { title: 'Great Circle Sailing', level: 'Advanced', category: 'Navigation', progress: 10, status: 'Start', tone: 'tone-purple' },
  { title: 'Planetary Science Deep Dive', level: 'Advanced', category: 'Astronomy', progress: 0, status: 'Start', tone: 'tone-green' },
];

export function Courses() {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('All Levels');
  const [category, setCategory] = useState('All Categories');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');

  const filtered = useMemo(() => COURSES.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
    && (level === 'All Levels' || c.level === level)
    && (category === 'All Categories' || c.category === category)
  ), [query, level, category]);

  return <div className="workspace-screen">
    <ScreenHeading eyebrow="LEARNING LIBRARY" title="Courses" detail="Browse the full AstroNav curriculum and continue where you left off." />
    <section className="panel courses-panel">
      <div className="courses-toolbar">
        <div className="search-field"><Search size={15} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses..." /></div>
        <select value={level} onChange={(e) => setLevel(e.target.value)}><option>All Levels</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}><option>All Categories</option><option>Navigation</option><option>Astronomy</option></select>
        <div className="layout-toggle"><button className={layout === 'grid' ? 'active' : ''} onClick={() => setLayout('grid')}><Grid2x2 size={15} /></button><button className={layout === 'list' ? 'active' : ''} onClick={() => setLayout('list')}><List size={15} /></button></div>
      </div>

      <div className={layout === 'grid' ? 'courses-grid' : 'courses-list'}>
        {filtered.map((c) => <div className={`course-card ${c.tone}`} key={c.title}>
          <div className="course-thumb"><span className="course-level-badge">{c.level}</span></div>
          <div className="course-body">
            <strong>{c.title}</strong>
            <div className="course-progress-row"><div className="course-progress-bar"><i style={{ width: `${c.progress}%` }} /></div><span>{c.progress}%</span></div>
            <button className={c.status === 'Completed' ? 'course-btn done' : 'course-btn'}>{c.status}</button>
          </div>
        </div>)}
        {filtered.length === 0 && <p className="empty-state">No courses match your filters.</p>}
      </div>
    </section>
  </div>;
}
