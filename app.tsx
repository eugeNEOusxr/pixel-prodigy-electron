import React, { useState } from 'react';
import { environments } from './environments';
import { Palette } from './components/Palette';
import { Canvas } from './components/Canvas';

export function App() {
  const [envIndex, setEnvIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(environments[0].palette[0]);

  function handleEnvChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const idx = parseInt(e.target.value, 10);
    setEnvIndex(idx);
    setSelectedColor(environments[idx].palette[0]);
  }

  return (
    <div style={{ padding: 20, color: 'white', backgroundColor: '#222', minHeight: '100vh' }}>
      <h1>Pixel Prodigy Electron Prototype</h1>
      <label htmlFor="envSelect">Choose Environment: </label>
      <select id="envSelect" value={envIndex} onChange={handleEnvChange}>
        {environments.map((env, idx) => (
          <option key={env.name} value={idx}>
            {env.name}
          </option>
        ))}
      </select>

      <Palette
        colors={environments[envIndex].palette}
        selectedColor={selectedColor}
        onSelect={setSelectedColor}
      />

      <Canvas pixelSize={16} width={16} height={16} selectedColor={selectedColor} />
    </div>
  );
}
