import { BookOpen, CalendarClock, ChevronRight, ClipboardCheck, Users } from 'lucide-react';
import { PanelTitle, ScreenHeading, Stat } from '../shared';

const COURSE_MANAGEMENT = [
  { title: 'Celestial Navigation \u2013 Level 1', sub: 'Course Management' },
  { title: 'Astronomy Fundamentals', sub: 'Sextant Practice' },
];

export function Instructor() {
  return <div className="workspace-screen">
    <ScreenHeading eyebrow="COMMAND & TRAINING OVERSIGHT" title="Instructor Panel" detail="Manage courses, sessions and monitor trainee attendance from one place." />

    <section className="panel instructor-overview">
      <div className="instructor-stats">
        <Stat value="12" label="Courses" sub="Managed" />
        <Stat value="05" label="Sessions" sub="This Week" />
        <Stat value="38" label="Students" sub="Enrolled" />
        <Stat value="87%" label="Attendance" sub="Average" />
      </div>
    </section>

    <div className="instructor-grid">
      <section className="panel">
        <PanelTitle title="Course Management" action="View all" />
        <div className="instructor-list">
          {COURSE_MANAGEMENT.map((c) => <div className="instructor-row" key={c.title}><span className="activity-icon"><BookOpen size={15} /></span><div><strong>{c.title}</strong><small>{c.sub}</small></div><ChevronRight size={15} /></div>)}
        </div>
        <button className="blue-button">Create New Course <ChevronRight size={15} /></button>
      </section>

      <section className="panel">
        <PanelTitle title="Session Management" action="View all" />
        <div className="instructor-list">
          <div className="instructor-row"><span className="activity-icon"><CalendarClock size={15} /></span><div><strong>Upcoming Sessions</strong><small>05 scheduled this week</small></div><ChevronRight size={15} /></div>
          <div className="instructor-row"><span className="activity-icon"><ClipboardCheck size={15} /></span><div><strong>Completed Sessions</strong><small>03 this week</small></div><ChevronRight size={15} /></div>
          <div className="instructor-row"><span className="activity-icon"><Users size={15} /></span><div><strong>Attendance Review</strong><small>Pending sign-off for 2 sessions</small></div><ChevronRight size={15} /></div>
        </div>
        <button className="outline-button full-width">View All Sessions <ChevronRight size={15} /></button>
      </section>
    </div>
  </div>;
}
