pixel-prodigy-electron/
├── package.json
├── vite.config.ts
├── electron/
│   ├── main.ts           # Electron main process
│   └── preload.ts        # Context bridge & preload script
├── src/
│   ├── App.tsx           # React root component
│   ├── index.tsx         # React entrypoint
│   ├── components/
│   │    ├── Canvas.tsx   # Pixel canvas drawing component
│   │    └── Palette.tsx  # Color palette selector component
│   ├── environments.ts  # Environment data (JSON-like)
│   └── styles.css        # Basic styles
├── public/
│   └── index.html
├── tsconfig.json
└── vite-electron-builder.config.js
