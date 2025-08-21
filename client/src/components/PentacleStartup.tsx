import React, { useState, useEffect, useRef } from 'react';

interface BorromeanStartupProps {
  onEnter: () => void;
}

export default function BorromeanStartup({ onEnter }: BorromeanStartupProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio for high quality
    const devicePixelRatio = window.devicePixelRatio || 1;
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;
    
    canvas.width = displayWidth * devicePixelRatio;
    canvas.height = displayHeight * devicePixelRatio;
    canvas.style.width = displayWidth + 'px';
    canvas.style.height = displayHeight + 'px';
    
    ctx.scale(devicePixelRatio, devicePixelRatio);

    // Clear canvas
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    // Calculate center for 7-pointed star
    const centerX = displayWidth / 2;
    const centerY = displayHeight / 2 + 50; // Offset down to make room for title
    const starRadius = Math.min(displayWidth, displayHeight) * 0.12;

    // Create 7-pointed star with lines from center
    const lines = [];
    for (let i = 0; i < 7; i++) {
      const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2; // Start from top
      const endX = centerX + starRadius * Math.cos(angle);
      const endY = centerY + starRadius * Math.sin(angle);
      lines.push({
        startX: centerX,
        startY: centerY,
        endX: endX,
        endY: endY,
        angle: angle
      });
    }

    // Calculate mouse angle from center
    const mouseAngle = Math.atan2(mousePosition.y - centerY, mousePosition.x - centerX);
    const normalizedMouseAngle = ((mouseAngle + Math.PI * 2) % (Math.PI * 2));
    
    // Draw lines with directional lighting
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    lines.forEach((line, index) => {
      const lineAngle = ((line.angle + Math.PI * 2) % (Math.PI * 2));
      
      // Calculate angle difference between mouse and line
      let angleDiff = Math.abs(normalizedMouseAngle - lineAngle);
      if (angleDiff > Math.PI) {
        angleDiff = Math.PI * 2 - angleDiff;
      }
      
      // Calculate intensity based on angle proximity
      const maxAngleDiff = Math.PI / 3; // 60 degrees for wider detection
      const intensity = angleDiff < maxAngleDiff 
        ? Math.max(0.2, 1 - (angleDiff / maxAngleDiff)) // More pronounced effect
        : 0.2;
      
      // Set line color based on intensity with better contrast
      const baseGray = 100; // Darker base
      const highlightGray = 220; // Brighter highlight
      const gray = Math.floor(baseGray + (highlightGray - baseGray) * intensity);
      ctx.strokeStyle = `rgb(${gray}, ${gray}, ${gray})`;
      ctx.lineWidth = intensity > 0.7 ? 3 : 2; // Thicker lines when very close
      
      // Draw the line
      ctx.beginPath();
      ctx.moveTo(line.startX, line.startY);
      ctx.lineTo(line.endX, line.endY);
      ctx.stroke();
    });

  }, [mousePosition]);

  const handleClick = () => {
    onEnter();
  };

  return (
    <div 
      className="fixed inset-0 bg-white cursor-pointer flex flex-col items-center justify-center"
      onClick={handleClick}
    >
      {/* Title at top */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 font-mono text-2xl text-black tracking-[0.2em] font-normal">
        COLOMBE BLANK
      </div>
      
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 font-mono text-sm text-gray-600 animate-pulse">
        Click to enter
      </div>
    </div>
  );
}