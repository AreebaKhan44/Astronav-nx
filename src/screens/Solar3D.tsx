import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export type PlanetKey = 'Mercury' | 'Venus' | 'Earth' | 'Mars' | 'Jupiter' | 'Saturn' | 'Uranus' | 'Neptune';

export const PLANET_DATA: Record<PlanetKey, { distance: string; period: string; diameter: string; temp: string; color: string; radius: number; orbit: number; speed: number; ring?: boolean; blurb: string }> = {
  Mercury: { distance: '57.9 million km', period: '88 days', diameter: '4,879 km', temp: '167°C average', color: '#9a938c', radius: 0.28, orbit: 6, speed: 4.15, blurb: 'The smallest and swiftest planet, scorched by its closeness to the Sun.' },
  Venus: { distance: '108.2 million km', period: '225 days', diameter: '12,104 km', temp: '464°C average', color: '#d9b98a', radius: 0.55, orbit: 8, speed: 1.62, blurb: 'A thick, toxic atmosphere traps heat, making Venus the hottest planet.' },
  Earth: { distance: '149.6 million km', period: '365.25 days', diameter: '12,742 km', temp: '14°C average', color: '#2f6fb0', radius: 0.58, orbit: 10.5, speed: 1, blurb: 'Our home planet. A world of oceans, atmosphere, and life.' },
  Mars: { distance: '227.9 million km', period: '687 days', diameter: '6,779 km', temp: '-65°C average', color: '#b5451b', radius: 0.4, orbit: 13, speed: 0.53, blurb: 'The Red Planet, home to the solar system\u2019s tallest volcano.' },
  Jupiter: { distance: '778.5 million km', period: '11.9 years', diameter: '139,820 km', temp: '-110°C average', color: '#c99a5b', radius: 1.5, orbit: 18, speed: 0.084, blurb: 'The largest planet, a gas giant with a centuries-old storm.' },
  Saturn: { distance: '1.43 billion km', period: '29.5 years', diameter: '116,460 km', temp: '-140°C average', color: '#e0c48a', radius: 1.3, orbit: 23, speed: 0.034, ring: true, blurb: 'Famous for its dazzling ring system of ice and rock.' },
  Uranus: { distance: '2.87 billion km', period: '84 years', diameter: '50,724 km', temp: '-195°C average', color: '#7fd4d9', radius: 0.9, orbit: 27, speed: 0.012, blurb: 'An ice giant that rotates almost completely on its side.' },
  Neptune: { distance: '4.50 billion km', period: '165 years', diameter: '49,244 km', temp: '-200°C average', color: '#3457c9', radius: 0.85, orbit: 31, speed: 0.006, blurb: 'The windiest planet, with storms exceeding 2,000 km/h.' },
};

export function Solar3D({ playing, showLabels, onSelect, resetSignal, zoomSignal }: {
  playing: boolean;
  showLabels: boolean;
  onSelect: (planet: PlanetKey) => void;
  resetSignal: number;
  zoomSignal: { dir: 'in' | 'out'; n: number } | null;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<{ playing: boolean; showLabels: boolean }>({ playing, showLabels });
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => { stateRef.current.playing = playing; }, [playing]);
  useEffect(() => { stateRef.current.showLabels = showLabels; }, [showLabels]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, mount.clientWidth / mount.clientHeight, 0.1, 500);
    camera.position.set(0, 22, 34);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.minDistance = 8;
    controls.maxDistance = 90;
    controlsRef.current = controls;

    // Starfield
    const starGeo = new THREE.BufferGeometry();
    const starCount = 2200;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const r = 120 + Math.random() * 260;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      starPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.cos(phi);
      starPositions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({ color: 0xbfe3ff, size: 0.45, sizeAttenuation: true, transparent: true, opacity: 0.85 });
    scene.add(new THREE.Points(starGeo, starMat));

    // Sun
    const sunGeo = new THREE.SphereGeometry(2.4, 48, 48);
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffd27a });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    scene.add(sun);
    const sunGlow = new THREE.PointLight(0xfff0c8, 3.2, 200, 1.6);
    scene.add(sunGlow);
    scene.add(new THREE.AmbientLight(0x3a5a8c, 0.55));
    const sunHalo = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xffdca0, transparent: true, opacity: 0.55, depthWrite: false }));
    sunHalo.scale.set(9, 9, 1);
    scene.add(sunHalo);

    // Orbit rings + planets
    const planetGroup = new THREE.Group();
    scene.add(planetGroup);
    const planetMeshes: { mesh: THREE.Mesh; key: PlanetKey; orbit: number; speed: number; angle: number; label: THREE.Sprite }[] = [];

    (Object.keys(PLANET_DATA) as PlanetKey[]).forEach((key, idx) => {
      const data = PLANET_DATA[key];
      const ringGeo = new THREE.RingGeometry(data.orbit - 0.015, data.orbit + 0.015, 128);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x3f6f9c, side: THREE.DoubleSide, transparent: true, opacity: 0.35 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      scene.add(ring);

      const geo = new THREE.SphereGeometry(data.radius, 32, 32);
      const mat = new THREE.MeshStandardMaterial({ color: data.color, roughness: 0.75, metalness: 0.05, emissive: new THREE.Color(data.color).multiplyScalar(0.06) });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = (idx / 8) * Math.PI * 2;
      mesh.position.set(Math.cos(angle) * data.orbit, 0, Math.sin(angle) * data.orbit);
      mesh.userData.key = key;
      planetGroup.add(mesh);

      if (data.ring) {
        const sRing = new THREE.Mesh(new THREE.RingGeometry(data.radius * 1.4, data.radius * 2.2, 48), new THREE.MeshBasicMaterial({ color: 0xd9c497, side: THREE.DoubleSide, transparent: true, opacity: 0.75 }));
        sRing.rotation.x = Math.PI / 2.6;
        mesh.add(sRing);
      }

      const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeLabelTexture(key), transparent: true, depthWrite: false }));
      label.scale.set(3.2, 0.8, 1);
      label.position.set(0, data.radius + 0.9, 0);
      label.visible = stateRef.current.showLabels;
      mesh.add(label);

      planetMeshes.push({ mesh, key, orbit: data.orbit, speed: data.speed, angle, label });
    });

    // Raycasting for selection
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    function onClick(e: MouseEvent) {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(planetMeshes.map((p) => p.mesh));
      if (hits.length) onSelect(hits[0].object.userData.key as PlanetKey);
    }
    renderer.domElement.addEventListener('click', onClick);

    let frameId = 0;
    const clock = new THREE.Clock();
    function animate() {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (stateRef.current.playing) {
        planetMeshes.forEach((p) => {
          p.angle += delta * 0.26 * p.speed;
          p.mesh.position.set(Math.cos(p.angle) * p.orbit, 0, Math.sin(p.angle) * p.orbit);
          p.mesh.rotation.y += delta * 0.6;
        });
      }
      planetMeshes.forEach((p) => { p.label.visible = stateRef.current.showLabels; });
      sun.rotation.y += delta * 0.05;
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(mount);

    return () => {
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener('click', onClick);
      resizeObserver.disconnect();
      controls.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, [onSelect]);

  useEffect(() => {
    const controls = controlsRef.current;
    const camera = cameraRef.current;
    if (!controls || !camera) return;
    camera.position.set(0, 22, 34);
    controls.target.set(0, 0, 0);
    controls.update();
  }, [resetSignal]);

  useEffect(() => {
    const controls = controlsRef.current;
    const camera = cameraRef.current;
    if (!controls || !camera || !zoomSignal) return;
    const factor = zoomSignal.dir === 'in' ? 0.85 : 1.18;
    const dir = new THREE.Vector3().subVectors(camera.position, controls.target);
    dir.multiplyScalar(factor);
    camera.position.copy(controls.target).add(dir);
    controls.update();
  }, [zoomSignal]);

  return <div className="three-mount" ref={mountRef} />;
}

function makeGlowTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size; canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,220,160,0.9)');
  grad.addColorStop(1, 'rgba(255,220,160,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

function makeLabelTexture(text: string) {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 64;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = 'rgba(6,13,27,0.55)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = '600 30px Manrope, sans-serif';
  ctx.fillStyle = '#d9edff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 2);
  return new THREE.CanvasTexture(canvas);
}
