import React, { useEffect, useRef } from 'react';

const DataFlow = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lines = [];
    
    // Adjust line count for mobile
    const lineCount = window.innerWidth < 768 ? 50 : 120;
    // Cyberpunk / high-tech corporate palette
    const colors = ['#0ea5e9', '#3b82f6', '#8b5cf6', '#2dd4bf'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class DataLine {
      constructor() {
        this.reset();
        // Randomize initial Y position so the screen starts full of lines
        this.y = Math.random() * canvas.height;
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -Math.random() * canvas.height;
        this.length = Math.random() * 200 + 50;
        this.speed = Math.random() * 10 + 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.7 + 0.1;
        this.width = Math.random() * 2.5 + 0.5;
      }
      update() {
        this.y += this.speed;
        // If line goes completely off screen, reset it to the top
        if (this.y - this.length > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.beginPath();
        // Create a fading gradient tail
        const gradient = ctx.createLinearGradient(this.x, this.y - this.length, this.x, this.y);
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(1, this.color);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.width;
        ctx.globalAlpha = this.opacity;
        ctx.moveTo(this.x, this.y - this.length);
        ctx.lineTo(this.x, this.y);
        
        // Add glow to the leading edge of the data stream
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.stroke();
        
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }
    }

    for (let i = 0; i < lineCount; i++) {
      lines.push(new DataLine());
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Cinematic dark slate/blue gradient background with transparency
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(2, 6, 23, 0.85)'); // Very dark slate (85% opacity)
      gradient.addColorStop(1, 'rgba(12, 18, 40, 0.95)'); // Deep midnight blue (95% opacity)
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < lineCount; i++) {
        lines[i].update();
        lines[i].draw();
      }
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
      {/* High-end corporate/tech image in the deep background */}
      <img src="/assets/images/placeholder-tech.jpg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, filter: 'grayscale(100%) contrast(1.2)' }} alt="Tech Background" />
      
      {/* Faint grid overlay for texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 1, pointerEvents: 'none' }}></div>
      
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%', position: 'relative', zIndex: 2 }} />
    </div>
  );
};

export default DataFlow;



