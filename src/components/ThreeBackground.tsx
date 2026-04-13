"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const W = container.clientWidth;
    const H = container.clientHeight;

    /* ─── Mobile optimisation: fewer particles on small screens ─── */
    const isMobile = window.innerWidth < 768;
    const COUNT    = isMobile ? 600 : 1800;

    /* ─── Renderer ─── */
    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 2));
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.pointerEvents = "none";
    container.appendChild(renderer.domElement);

    /* ─── Scene / Camera ─── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 1000);
    camera.position.z = 80;

    /* ─── Particle Field ─── */
    const positions = new Float32Array(COUNT * 3);
    const colors    = new Float32Array(COUNT * 3);
    const speeds    = new Float32Array(COUNT);
    const phases    = new Float32Array(COUNT);

    const palette = [
      new THREE.Color("#2563EB"),
      new THREE.Color("#60A5FA"),
      new THREE.Color("#1E3A5F"),
      new THREE.Color("#93C5FD"),
      new THREE.Color("#3B82F6"),
    ];

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      speeds[i] = 0.08 + Math.random() * 0.15;
      phases[i] = Math.random() * Math.PI * 2;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color",    new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: isMobile ? 0.4 : 0.55,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    /* ─── Glowing Core Sphere (desktop only) ─── */
    if (!isMobile) {
      const sphereGeo = new THREE.IcosahedronGeometry(14, 2);
      const sphereMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#2563EB"),
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      });
      const sphere = new THREE.Mesh(sphereGeo, sphereMat);
      sphere.position.set(30, 0, -30);
      scene.add(sphere);

      const glowGeo = new THREE.SphereGeometry(12, 32, 32);
      const glowMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#1E3A5F"),
        transparent: true,
        opacity: 0.18,
      });
      const glow = new THREE.Mesh(glowGeo, glowMat);
      glow.position.copy(sphere.position);
      scene.add(glow);

      /* ─── Connecting Lines ─── */
      const linesMat   = new THREE.LineBasicMaterial({ color: new THREE.Color("#2563EB"), transparent: true, opacity: 0.07 });
      const nodeCount  = 40;
      const nodes: THREE.Vector3[] = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new THREE.Vector3(
          (Math.random() - 0.5) * 160,
          (Math.random() - 0.5) * 100,
          (Math.random() - 0.5) * 60 - 20
        ));
      }
      const lineGroup = new THREE.Group();
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          if (nodes[i].distanceTo(nodes[j]) < 40) {
            const lg = new THREE.BufferGeometry().setFromPoints([nodes[i], nodes[j]]);
            lineGroup.add(new THREE.Line(lg, linesMat));
          }
        }
      }
      scene.add(lineGroup);

      /* sphere + lines animation stored for use in loop */
      (scene as any).__sphere    = sphere;
      (scene as any).__glow      = glow;
      (scene as any).__lineGroup = lineGroup;
    }

    /* ─── Mouse parallax (desktop only) ─── */
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    if (!isMobile) window.addEventListener("mousemove", onMouseMove);

    /* ─── Resize ─── */
    const onResize = () => {
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize);

    /* ─── Animation loop ─── */
    let frame  = 0;
    let animId = 0;

    const tick = () => {
      animId = requestAnimationFrame(tick);
      frame++;
      const t = frame * 0.005;

      const pos = geo.attributes.position.array as Float32Array;
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3 + 1] += speeds[i] * 0.15 * Math.sin(t + phases[i]);
        if (pos[i * 3 + 1] > 60) pos[i * 3 + 1] = -60;
      }
      geo.attributes.position.needsUpdate = true;

      const sp = (scene as any).__sphere;
      const gl = (scene as any).__glow;
      const lg = (scene as any).__lineGroup;
      if (sp) {
        sp.rotation.y = t * 0.3;
        sp.rotation.x = t * 0.15;
        gl.rotation.copy(sp.rotation);
        lg.rotation.y = t * 0.05;
      }

      if (!isMobile) {
        camera.position.x += (mouseX * 8 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 4 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}
