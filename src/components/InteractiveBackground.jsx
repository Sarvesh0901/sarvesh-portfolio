import { useEffect, useRef } from 'react';
import './InteractiveBackground.css';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 140,
      isHovered: false,
    };

    // Color palette matching the portfolio theme
    const colors = [
      '#c0392b', // Primary Warm Red
      '#e74c3c', // Primary Light Red
      '#e91e8c', // Accent Pink
      '#9b59b6', // Secondary Purple
      '#ff6b6b', // Coral Red
      '#a855f7', // Vivid Purple
    ];

    // Particle class
    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;
        this.size = Math.random() * 2.2 + 1.2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = -(Math.random() * 0.6 + 0.3);
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.45 + 0.2;
        this.baseAlpha = this.alpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulseAngle += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.15;

        // Interactive mouse physics: gentle push / attraction
        if (mouse.isHovered) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            // Gently repel away from mouse
            this.x -= Math.cos(angle) * force * 2.5;
            this.y -= Math.sin(angle) * force * 2.5;
            this.alpha = Math.min(1, this.alpha + force * 0.4);
          }
        }

        // Wrap or reset when out of screen
        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset(false);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Number of particles according to screen width
    const particleCount = Math.min(Math.floor(width / 22), 65);
    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;

      // Update spotlight position
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
        spotlightRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0.35';
      }
    };

    // Touch support for mobile devices
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.isHovered = true;
        if (spotlightRef.current) {
          spotlightRef.current.style.setProperty('--mouse-x', `${e.touches[0].clientX}px`);
          spotlightRef.current.style.setProperty('--mouse-y', `${e.touches[0].clientY}px`);
          spotlightRef.current.style.opacity = '1';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Main animation loop
    const animate = () => {
      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Draw interactive constellation connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 100) {
            const lineAlpha = (1 - dist / 100) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#e91e8c';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw connections to mouse cursor
        if (mouse.isHovered) {
          const mdx = mouse.x - particles[i].x;
          const mdy = mouse.y - particles[i].y;
          const mdist = Math.hypot(mdx, mdy);

          if (mdist < 130) {
            const mouseLineAlpha = (1 - mdist / 130) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = '#ff6b6b';
            ctx.globalAlpha = mouseLineAlpha;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update & render all particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="interactive-bg-wrapper" aria-hidden="true">
      {/* Floating Animated Gradient Orbs */}
      <div className="bg-glow-orb orb-1" />
      <div className="bg-glow-orb orb-2" />
      <div className="bg-glow-orb orb-3" />
      <div className="bg-glow-orb orb-4" />

      {/* Interactive Mouse Spotlight Aura */}
      <div ref={spotlightRef} className="bg-mouse-spotlight" />

      {/* Interactive HTML5 Canvas */}
      <canvas ref={canvasRef} className="bg-particles-canvas" />

      {/* Subtle Noise / Grid Pattern Overlay */}
      <div className="bg-grid-overlay" />
    </div>
  );
};

export default InteractiveBackground;
