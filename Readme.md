# Music Player Widget

A lightweight React music player widget with a modern UI, featuring play/pause, next/previous track, and minimal functionality. Built with TypeScript, Framer Motion, Ionic, and Lottie for a smooth, interactive experience.

## Installation

Install the package via npm:

```bash
npm install @lijuu/musicplayerwidget
```

Ensure peer dependencies are installed:

```bash
npm install react react-dom framer-motion @ionic/react lottie-web @ionic/core ionicons
```

## Usage

Import and add the `MusicPlayer` component to your React app. Configure Ionic in your app's entry file.

### Example

```tsx
// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// src/App.tsx
import React from "react";
import { MusicPlayer } from "@lijuu/musicplayerwidget";

const App: React.FC = () => (
  <MusicPlayer className="bottom-4 right-4" />
);

export default App;
```

## Props

- `className`: Optional string to add custom classes for positioning or styling (e.g., `"bottom-4 right-4"`).

## Features

- Preloaded track list with 7 songs.
- Play/pause, next/previous track controls.
- Minimize/expand toggle with smooth animations.
- Lottie-powered sound bars visualization.
- Responsive design with blurred background and grain overlay.

## Requirements

- React 18+
- Node.js 18+ for development
