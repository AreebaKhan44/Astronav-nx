import { useState } from 'react';
import { ChevronRight, Mail } from 'lucide-react';
import { PanelTitle, ScreenHeading } from '../shared';

const TABS = ['General', 'Account', 'Notifications', 'Security'];
const TOPICS = ['How to join live sessions', 'How to reset your progress', 'Understanding navigation tools', 'Troubleshooting playback'];

export function SettingsScreen() {
  const [tab, setTab] = useState('General');
  const [theme, setTheme] = useState(true);
  const [autoDownload, setAutoDownload] = useState(false);

  return <div className="workspace-screen">
    <ScreenHeading eyebrow="PREFERENCES" title="Settings / Help & Support" detail="Configure your workspace and find answers when you need them." />
    <div className="settings-layout">
      <section className="panel">
        <div className="settings-tabs">{TABS.map((t) => <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t}</button>)}</div>

        <div className="settings-rows">
          <div className="settings-row"><div><strong>Theme</strong><small>Use dark mode across ASTRONAV</small></div><Toggle checked={theme} onChange={setTheme} /></div>
          <div className="settings-row"><div><strong>Time Zone</strong><small>(PKT) Pakistan Standard Time</small></div><span className="settings-value">PKT <ChevronRight size={14} /></span></div>
          <div className="settings-row"><div><strong>Data & Storage</strong><small>Auto-download simulation assets</small></div><Toggle checked={autoDownload} onChange={setAutoDownload} /></div>
          <div className="settings-row"><div><strong>Download Quality</strong><small>Choose asset resolution</small></div><span className="settings-value">High Quality <ChevronRight size={14} /></span></div>
        </div>

        <button className="blue-button profile-save">Save Changes</button>
      </section>

      <section className="panel help-panel">
        <PanelTitle title="Help & Support" action="" />
        <div className="search-field help-search"><input placeholder="Search help articles..." /></div>
        <div className="side-section-label secondary-label">POPULAR TOPICS</div>
        <div className="help-topics">{TOPICS.map((t) => <button key={t}>{t} <ChevronRight size={14} /></button>)}</div>

        <div className="help-contact">
          <strong>Need More Help?</strong>
          <p>Contact our support team</p>
          <button className="outline-button full-width"><Mail size={15} /> Contact Support</button>
        </div>
      </section>
    </div>
  </div>;
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return <button className={`toggle ${checked ? 'on' : ''}`} onClick={() => onChange(!checked)}><i /></button>;
}
