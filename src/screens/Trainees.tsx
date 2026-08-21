import { useMemo, useState } from 'react';
import { ChevronRight, Search } from 'lucide-react';
import { ScreenHeading } from '../shared';

const TRAINEES = [
  { name: 'Ahmed Khan', course: 'Celestial Navigation Level 2', progress: 80, level: 'Intermediate' },
  { name: 'Usman Ali', course: 'Astronomy Fundamentals', progress: 60, level: 'Beginner' },
  { name: 'Zain Abbas', course: 'Celestial Navigation Level 1', progress: 75, level: 'Beginner' },
  { name: 'Bilal Ahmed', course: 'Sextant Practice', progress: 50, level: 'Beginner' },
  { name: 'Danish Ali', course: 'Space & Galaxies Exploration', progress: 30, level: 'Advanced' },
];

export function Trainees() {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('All Levels');

  const filtered = useMemo(() => TRAINEES.filter((t) => t.name.toLowerCase().includes(query.toLowerCase()) && (level === 'All Levels' || t.level === level)), [query, level]);

  return <div className="workspace-screen">
    <ScreenHeading eyebrow="TRAINEE MANAGEMENT" title="Trainees" detail="Search, filter and track every trainee's course progress." />
    <section className="panel">
      <div className="courses-toolbar">
        <div className="search-field"><Search size={15} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search trainees..." /></div>
        <select><option>All Courses</option></select>
        <select value={level} onChange={(e) => setLevel(e.target.value)}><option>All Levels</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select>
      </div>

      <table className="trainee-table">
        <thead><tr><th>Trainee</th><th>Course Enrolled</th><th>Progress</th><th>Level</th><th>Action</th></tr></thead>
        <tbody>
          {filtered.map((t) => <tr key={t.name}>
            <td><div className="trainee-cell"><span className="avatar tiny">{t.name.split(' ').map((n) => n[0]).join('')}</span>{t.name}</div></td>
            <td>{t.course}</td>
            <td><div className="course-progress-row small"><div className="course-progress-bar"><i style={{ width: `${t.progress}%` }} /></div><span>{t.progress}%</span></div></td>
            <td><span className={`level-tag ${t.level.toLowerCase()}`}>{t.level}</span></td>
            <td><button className="row-action"><ChevronRight size={15} /></button></td>
          </tr>)}
        </tbody>
      </table>
      {filtered.length === 0 && <p className="empty-state">No trainees match your search.</p>}
      <button className="outline-button full-width">View All Trainees <ChevronRight size={15} /></button>
    </section>
  </div>;
}
