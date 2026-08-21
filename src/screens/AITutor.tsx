import { useState } from 'react';
import { ArrowUp, BookOpen, Compass, Sparkles, Star, Sun } from 'lucide-react';
import { ScreenHeading } from '../shared';

type Message = { from: 'ai' | 'user'; text: string };

const STARTERS = [
  { icon: Star, label: 'What is the use of Polaris in Celestial Navigation?' },
  { icon: Compass, label: 'How do I use a sextant to measure altitude?' },
  { icon: Sun, label: 'Explain the difference between azimuth and altitude.' },
];

export function AITutor() {
  const [messages, setMessages] = useState<Message[]>([
    { from: 'ai', text: 'Welcome back, Lt. Cdr. Ali! I\u2019m your AI Astronomy Tutor. Ask me anything about celestial navigation, astronomy, or your current course.' },
    { from: 'user', text: 'What is the use of Polaris in Celestial Navigation?' },
    { from: 'ai', text: 'Polaris is used to determine north direction. Since it sits near the north celestial pole, its altitude above the horizon closely matches the observer\u2019s latitude — making it one of the most reliable references for a navigator.' },
  ]);
  const [draft, setDraft] = useState('');

  function send(text: string) {
    if (!text.trim()) return;
    setMessages((m) => [...m, { from: 'user', text }, { from: 'ai', text: 'Great question. Let\u2019s break it down step by step — I\u2019ll walk you through the concept with a worked example so it\u2019s easy to apply during your next simulation.' }]);
    setDraft('');
  }

  return <div className="workspace-screen">
    <ScreenHeading eyebrow="ON-DEMAND ASTRONOMY TUTOR" title="AI Tutor" detail="Ask astronomy and navigation questions, get instant, tailored explanations." />
    <div className="tutor-layout">
      <aside className="tutor-side panel">
        <div className="tutor-avatar"><Sparkles size={22} /></div>
        <strong>AI Astronomy Tutor</strong>
        <small>Trained on the full AstroNav curriculum</small>
        <div className="side-section-label secondary-label">SUGGESTED TOPICS</div>
        <div className="tutor-topics">
          {[{ icon: BookOpen, label: 'Celestial Navigation' }, { icon: Star, label: 'Star Identification' }, { icon: Compass, label: 'Sextant Technique' }, { icon: Sun, label: 'Solar System Basics' }].map(({ icon: Icon, label }) => <button key={label}><Icon size={14} /> {label}</button>)}
        </div>
      </aside>

      <section className="tutor-chat panel">
        <div className="tutor-messages">
          {messages.map((m, i) => <div className={`bubble-row ${m.from}`} key={i}>
            {m.from === 'ai' && <span className="bubble-avatar"><Sparkles size={14} /></span>}
            <div className="bubble">{m.text}</div>
          </div>)}
        </div>

        {messages.length <= 3 && <div className="tutor-starters">{STARTERS.map(({ icon: Icon, label }) => <button key={label} onClick={() => send(label)}><Icon size={13} /> {label}</button>)}</div>}

        <div className="tutor-input-bar">
          <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send(draft)} placeholder="Ask astronomy related questions..." />
          <button className="send-btn" onClick={() => send(draft)}><ArrowUp size={16} /></button>
        </div>
      </section>
    </div>
  </div>;
}
