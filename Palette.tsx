import React from 'react';

interface PaletteProps {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
}

export function Palette({ colors, selectedColor, onSelect }: PaletteProps) {
  return (
    <div style={{ marginBottom: 10 }}>
      {colors.map(color => (
        <div
          key={color}
          onClick={() => onSelect(color)}
          style={{
            display: 'inline-block',
            width: 24,
            height: 24,
            marginRight: 6,
            borderRadius: 3,
            border: color === selectedColor ? '3px solid white' : '2px solid #444',
            backgroundColor: color,
            cursor: 'pointer',
          }}
        />
      ))}
    </div>
  );
}
export function PaletteContainer({
  palettes,
  selectedPalette,
  onSelectPalette,
}: {
  palettes: { name: string; palette: string[] }[];
  selectedPalette: string;
  onSelectPalette: (name: string) => void;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {palettes.map(({ name, palette }) => (
        <div
          key={name}
          onClick={() => onSelectPalette(name)}
          style={{
            padding: 10,
            borderRadius: 5,
            backgroundColor: selectedPalette === name ? '#eee' : '#fff',
            cursor: 'pointer',
          }}
        >
          <h4>{name}</h4>
          <Palette colors={palette} selectedColor={palette[0]} onSelect={() => {}} />
        </div>
      ))}
    </div>
  );
}