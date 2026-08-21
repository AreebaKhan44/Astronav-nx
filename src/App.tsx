import { useState } from 'react';
import { ChevronRight, EyeOff, Eye, ArrowLeft, LockKeyhole } from 'lucide-react';
import { AuthShell, Sidebar, TopHeader, type Screen } from './shared';
import { Dashboard } from './screens/Dashboard';
import { Planetarium } from './screens/Planetarium';
import { NavigationTrainer } from './screens/NavigationTrainer';
import { Courses } from './screens/Courses';
import { AITutor } from './screens/AITutor';
import { Simulations } from './screens/Simulations';
import { ProgressScreen } from './screens/Progress';
import { Reports } from './screens/Reports';
import { LiveSessions } from './screens/LiveSessions';
import { Instructor } from './screens/Instructor';
import { Trainees } from './screens/Trainees';
import { Profile } from './screens/Profile';
import { SettingsScreen } from './screens/SettingsScreen';

function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (screen === 'login') return <AuthShell><Login showPassword={showPassword} setShowPassword={setShowPassword} onLogin={() => setScreen('dashboard')} onForgot={() => setScreen('forgot')} /></AuthShell>;
  if (screen === 'forgot') return <AuthShell><Forgot onBack={() => setScreen('login')} /></AuthShell>;

  return <div className="platform-shell">
    <Sidebar screen={screen} setScreen={setScreen} open={sidebarOpen} setOpen={setSidebarOpen} />
    <div className="platform-main">
      <TopHeader onMenu={() => setSidebarOpen(!sidebarOpen)} />
      <div className="platform-content">
        {screen === 'dashboard' && <Dashboard setScreen={setScreen} />}
        {screen === 'planetarium' && <Planetarium />}
        {screen === 'navigation' && <NavigationTrainer />}
        {screen === 'courses' && <Courses />}
        {screen === 'aitutor' && <AITutor />}
        {screen === 'simulations' && <Simulations />}
        {screen === 'progress' && <ProgressScreen />}
        {screen === 'reports' && <Reports />}
        {screen === 'live' && <LiveSessions />}
        {screen === 'instructor' && <Instructor />}
        {screen === 'trainees' && <Trainees />}
        {screen === 'profile' && <Profile />}
        {screen === 'settings' && <SettingsScreen />}
      </div>
    </div>
  </div>;
}

function Login({ showPassword, setShowPassword, onLogin, onForgot }: { showPassword: boolean; setShowPassword: (value: boolean) => void; onLogin: () => void; onForgot: () => void }) {
  return <div className="auth-card"><span className="card-eyebrow">SECURE ACCESS · 01</span><h2>Welcome Back</h2><p className="auth-subtitle">Enter your credentials to continue</p><label>Email or Username<input placeholder="Enter your email or username" /></label><label>Password<div className="input-with-icon"><input type={showPassword ? 'text' : 'password'} placeholder="Enter your password" /><button onClick={() => setShowPassword(!showPassword)} aria-label="Show password">{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></label><div className="form-row"><label className="check-label"><input type="checkbox" defaultChecked /> <span>Remember me</span></label><button className="link-button" onClick={onForgot}>Forgot Password?</button></div><button className="auth-submit" onClick={onLogin}>Login <ChevronRight size={17} /></button><p className="register-line">Don't have an account? <button className="link-button">Register Here</button></p></div>;
}

function Forgot({ onBack }: { onBack: () => void }) { return <div className="auth-card forgot-card"><span className="card-eyebrow">ACCOUNT RECOVERY · 02</span><div className="recovery-icon"><LockKeyhole size={24} /></div><h2>Forgot Password?</h2><p className="auth-subtitle">Enter your email address and we'll send you instructions to reset your password.</p><label>Email Address<input placeholder="Enter your email address" /></label><button className="auth-submit">Send Reset Instructions <ChevronRight size={17} /></button><button className="back-link" onClick={onBack}><ArrowLeft size={15} /> Back to Login</button><p className="support-copy">Need help accessing your account?<br /><span>Contact AstroNav support</span></p></div>; }

export default App;
