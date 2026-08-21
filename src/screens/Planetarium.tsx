import { useCallback, useState } from 'react';
import { ChevronRight, Pause, Play, SlidersHorizontal, Sun, Target } from 'lucide-react';
import { Fact, ScreenHeading } from '../shared';
import { PLANET_DATA, Solar3D, type PlanetKey } from './Solar3D';

export function Planetarium() {
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('3d');
  const [selected, setSelected] = useState<PlanetKey>('Earth');
  const [playing, setPlaying] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [showConstellations, setShowConstellations] = useState(false);
  const [resetSignal, setResetSignal] = useState(0);
  const [zoomSignal, setZoomSignal] = useState<{ dir: 'in' | 'out'; n: number } | null>(null);

  const handleSelect = useCallback((planet: PlanetKey) => setSelected(planet), []);
  const info = PLANET_DATA[selected];
  let zoomCounter = 0;

  return <div className="workspace-screen">
    <ScreenHeading eyebrow="IMMERSIVE LEARNING ENVIRONMENT" title="3D Planetarium" detail="Explore the solar system in a high-fidelity simulated environment." />
    <div className="planetarium-layout">
      <div className="planetarium-view">
        <div className="sim-top"><span>3D PLANETARIUM</span><button>Solar System <ChevronRight size={13} /></button></div>

        {viewMode === '3d'
          ? <Solar3D playing={playing} showLabels={showLabels} onSelect={handleSelect} resetSignal={resetSignal} zoomSignal={zoomSignal} />
          : <div className="star-map">
              <div className="orbit orbit-1" /><div className="orbit orbit-2" /><div className="orbit orbit-3" />
              <div className="sun-core"><Sun size={40} /></div>
              {(['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'] as PlanetKey[]).map((name) => <div key={name} className={`planet ${name.toLowerCase()}`} onClick={() => setSelected(name)}><span>{name}</span></div>)}
            </div>}

        <div className="map-controls">
          <button onClick={() => { zoomCounter += 1; setZoomSignal({ dir: 'in', n: zoomCounter }); }}><ZoomIcon plus /></button>
          <button onClick={() => { zoomCounter += 1; setZoomSignal({ dir: 'out', n: zoomCounter }); }}><ZoomIcon /></button>
          <button onClick={() => setResetSignal((n) => n + 1)}><Target size={15} /></button>
        </div>

        <div className="sim-toolbar">
          <button className={viewMode === '2d' ? 'active' : ''} onClick={() => setViewMode('2d')}>2D Map</button>
          <button className={viewMode === '3d' ? 'active' : ''} onClick={() => setViewMode('3d')}>3D View</button>
          <button className={showConstellations ? 'active' : ''} onClick={() => setShowConstellations((v) => !v)}>Constellations</button>
          <button className={viewMode === '3d' ? 'active' : ''} onClick={() => setViewMode('3d')}>Star Map</button>
          <button className={showLabels ? 'active' : ''} onClick={() => setShowLabels((v) => !v)}>Planet Labels</button>
        </div>

        <div className="timeline">
          <button onClick={() => setPlaying((p) => !p)}>{playing ? <Pause size={13} /> : <Play size={13} fill="currentColor" />}</button>
          <span>{playing ? 'LIVE' : 'PAUSED'}</span>
          <div className="timeline-track"><i /></div>
          <span>1 orbit / min</span>
          <button><SlidersHorizontal size={14} /></button>
        </div>
      </div>

      <aside className="planet-info">
        <span className="panel-eyebrow">SELECTED CELESTIAL BODY</span>
        <div className={`selected-planet ${selected.toLowerCase()}-preview`} />
        <h2>{selected}</h2>
        <p>{info.blurb}</p>
        <div className="planet-facts">
          <Fact label="DISTANCE FROM SUN" value={info.distance} />
          <Fact label="ORBITAL PERIOD" value={info.period} />
          <Fact label="DIAMETER" value={info.diameter} />
          <Fact label="TEMPERATURE" value={info.temp} />
        </div>
        <button className="blue-button">Learn More <ChevronRight size={15} /></button>
      </aside>
    </div>
  </div>;
}

function ZoomIcon({ plus }: { plus?: boolean }) { return <span className="zoom-icon">{plus ? '+' : '\u2212'}</span>; }
