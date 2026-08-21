import { useState } from 'react';
import { ScreenHeading } from '../shared';

export function Profile() {
  const [name, setName] = useState('Lt. Commander Ali');
  const [email, setEmail] = useState('ali.commander@pakistannavy.gov.pk');
  const [rank, setRank] = useState('Lt. Commander');
  const [phone, setPhone] = useState('+92 300 1234567');

  return <div className="workspace-screen">
    <ScreenHeading eyebrow="ACCOUNT" title="Profile" detail="View and update your personal training profile." />
    <section className="panel profile-panel">
      <div className="profile-head">
        <div className="avatar profile-avatar">LA</div>
        <div><strong>{name}</strong><small>{rank} \u00b7 Administrator</small></div>
      </div>

      <div className="profile-form">
        <label>Full Name<input value={name} onChange={(e) => setName(e.target.value)} /></label>
        <label>Rank<input value={rank} onChange={(e) => setRank(e.target.value)} /></label>
        <label>Email<input value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Phone<input value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
      </div>

      <div className="side-section-label secondary-label">PREFERENCES</div>
      <div className="profile-prefs">
        <label className="check-label"><input type="checkbox" defaultChecked /> <span>Email notifications for upcoming sessions</span></label>
        <label className="check-label"><input type="checkbox" defaultChecked /> <span>Weekly progress summary</span></label>
        <label className="check-label"><input type="checkbox" /> <span>SMS reminders</span></label>
      </div>

      <button className="blue-button profile-save">Save Changes</button>
    </section>
  </div>;
}
