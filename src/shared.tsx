import type { ReactNode } from 'react';
import {
  Activity, ArrowLeft, Bell, BookOpen, Box, ChevronRight, CircleHelp,
  Clock3, Compass, GraduationCap, Home, LogOut, Map, Menu, Radio, Search,
  Settings, Sparkles, Gauge, Users, X,
} from 'lucide-react';

export type Screen =
  | 'login' | 'forgot' | 'dashboard' | 'planetarium' | 'navigation'
  | 'courses' | 'aitutor' | 'simulations' | 'progress' | 'reports'
  | 'live' | 'instructor' | 'trainees' | 'profile' | 'settings';

export const navItems = [
  { label: 'Dashboard', icon: Home, screen: 'dashboard' as Screen },
  { label: '3D Planetarium', icon: Box, screen: 'planetarium' as Screen },
  { label: 'Celestial Navigation', icon: Compass, screen: 'navigation' as Screen },
  { label: 'Courses', icon: BookOpen, screen: 'courses' as Screen },
  { label: 'AI Tutor', icon: Sparkles, screen: 'aitutor' as Screen },
  { label: 'Simulations', icon: Gauge, screen: 'simulations' as Screen },
  { label: 'My Progress', icon: Activity, screen: 'progress' as Screen },
  { label: 'Results & Reports', icon: Map, screen: 'reports' as Screen },
  { label: 'Live Sessions', icon: Radio, screen: 'live' as Screen },
];

export const managementItems = [
  { label: 'Instructor Panel', icon: GraduationCap, screen: 'instructor' as Screen },
  { label: 'Trainees', icon: Users, screen: 'trainees' as Screen },
  { label: 'Profile', icon: Users, screen: 'profile' as Screen },
  { label: 'Settings', icon: Settings, screen: 'settings' as Screen },
  { label: 'Help & Support', icon: CircleHelp, screen: 'settings' as Screen },
];

export function AuthShell({ children }: { children: ReactNode }) {
  return <div className="auth-shell"><div className="auth-visual"><div className="auth-stars" /><div className="auth-earth" /><div className="auth-orbit" /><div className="auth-visual-copy"><span className="identity-kicker"><span className="kicker-line" /> PROFESSIONAL ASTRONOMY & CELESTIAL NAVIGATION TRAINING</span><h1>Explore.<br /><em>Observe.</em><br />Navigate.</h1><p>Master the universe with precision, curiosity, and purpose.</p><div className="auth-quote"><span>&ldquo;</span><p>Knowledge. Precision. Excellence.</p></div></div><div className="visual-coordinates">24°51′N &nbsp; 67°02′E<br /><span>PAKISTAN NAVY · ASTRONAV COMMAND</span></div></div><div className="auth-panel"><div className="auth-brand"><BrandMark /><div><strong>ASTRO</strong>NAV<span>Professional Astronomy & Navigation</span></div></div>{children}<NavyFooter /></div></div>;
}

export function BrandMark() { return <div className="brand-mark"><Compass size={26} strokeWidth={1.5} /><span className="brand-star">✦</span></div>; }

export function NavyFooter() { return <div className="navy-footer"><div className="navy-crest">⚓</div><div><strong>PAKISTAN NAVY</strong><span>Knowledge · Precision · Excellence</span></div><div className="footer-rule" /><small>© 2025 Pakistan Navy · AstroNav<br />Secure training environment</small></div>; }

export function Sidebar({ screen, setScreen, open, setOpen }: { screen: Screen; setScreen: (screen: Screen) => void; open: boolean; setOpen: (open: boolean) => void }) {
  return <aside className={`sidebar ${open ? 'open' : ''}`}>
    <div className="sidebar-head"><div className="sidebar-brand"><img src="src/image/logo.png" alt="ASTRONAV Logo" className="sidebar-logo" /></div><button className="close-sidebar" onClick={() => setOpen(false)}><X size={18} /></button></div>
    <div className="side-section-label">MAIN MENU</div>
    <nav>{navItems.map(({ label, icon: Icon, screen: itemScreen }) => <button key={label} className={screen === itemScreen ? 'selected' : ''} onClick={() => { setScreen(itemScreen); setOpen(false); }}><Icon size={16} /><span>{label}</span>{screen === itemScreen ? <span className="nav-active-dot" /> : null}</button>)}</nav>
    <div className="side-section-label secondary-label">MANAGEMENT</div>
    <nav>{managementItems.map(({ label, icon: Icon, screen: itemScreen }) => <button key={label} className={screen === itemScreen ? 'selected' : ''} onClick={() => { setScreen(itemScreen); setOpen(false); }}><Icon size={16} /><span>{label}</span></button>)}</nav>
    <div className="sidebar-spacer" />
    <div className="sidebar-footer"><div className="navy-crest">⚓</div><div><strong>PAKISTAN NAVY</strong><span>Knowledge. Precision. Excellence.</span></div></div>
    <button className="logout-button" onClick={() => setScreen('login')}><LogOut size={16} /> Logout</button>
  </aside>;
}

export function TopHeader({ onMenu }: { onMenu: () => void }) {
  return <header className="platform-header"><button className="mobile-menu" onClick={onMenu}><Menu size={20} /></button><div className="welcome-user"><div className="avatar">LA</div><div><span>Welcome back,</span><strong>Lt. Commander Ali</strong></div></div><div className="header-right"><div className="header-date"><Clock3 size={15} /><span>18 May 2025<br /><b>14:30 PKT</b></span></div><button><Search size={18} /></button><button className="notification"><Bell size={18} /><i>3</i></button><button><Settings size={18} /></button><div className="header-divider" /><div className="profile-identity"><div className="avatar small">LA</div><span>Lt. Cdr. Ali<small>Administrator</small></span></div></div></header>;
}

export function Stat({ value, label, sub }: { value: string; label: string; sub: string }) { return <div className="stat"><strong>{value}</strong><span>{label}<small>{sub}</small></span></div>; }
export function PanelTitle({ title, action }: { title: string; action: string }) { return <div className="panel-title"><h3>{title}</h3><button>{action} <ChevronRight size={13} /></button></div>; }
export function Fact({ label, value }: { label: string; value: string }) { return <div><span>{label}</span><strong>{value}</strong></div>; }
export function ScreenHeading({ eyebrow, title, detail, action }: { eyebrow: string; title: string; detail: string; action?: ReactNode }) { return <div className="workspace-heading"><div><span className="identity-kicker"><span className="kicker-line" /> {eyebrow}</span><h1>{title}</h1><p>{detail}</p></div>{action}</div>; }
export function BackBar({ label, onBack }: { label: string; onBack: () => void }) { return <button className="back-link workspace-back" onClick={onBack}><ArrowLeft size={15} /> {label}</button>; }
