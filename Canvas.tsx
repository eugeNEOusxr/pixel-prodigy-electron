import React, { useRef, useEffect, useState } from 'react';

interface CanvasProps {
  pixelSize: number;
  width: number;
  height: number;
  selectedColor: string;
}

export function Canvas({ pixelSize, width, height, selectedColor }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pixels, setPixels] = useState(() => {
    return Array(width * height).fill('#111');
  });

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, width * pixelSize, height * pixelSize);

    // Draw pixels
    pixels.forEach((color, i) => {
      const x = (i % width) * pixelSize;
      const y = Math.floor(i / width) * pixelSize;
      ctx.fillStyle = color;
      ctx.fillRect(x, y, pixelSize, pixelSize);
    });

    // Draw grid
    ctx.strokeStyle = '#333';
    for (let x = 0; x <= width * pixelSize; x += pixelSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height * pixelSize);
      ctx.stroke();
    }
    for (let y = 0; y <= height * pixelSize; y += pixelSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width * pixelSize, y);
      ctx.stroke();
    }
  }, [pixels, pixelSize, width, height]);

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const rect = canvasRef.current!.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / pixelSize);
    const y = Math.floor((e.clientY - rect.top) / pixelSize);
    const idx = y * width + x;
    if (idx >= 0 && idx < pixels.length) {
      const newPixels = [...pixels];
      newPixels[idx] = selectedColor;
      setPixels(newPixels);
    }
  }

  return (
    <canvas
      ref={canvasRef}
      width={width * pixelSize}
      height={height * pixelSize}
      style={{ imageRendering: 'pixelated', cursor: 'crosshair', border: '1px solid #555' }}
      onClick={handleClick}
    />
  );
}
