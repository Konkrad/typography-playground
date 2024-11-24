import React, { useState } from 'react';
import { Type } from 'lucide-react';
import { Preview } from './components/Preview';
import { TypographyControls } from './components/TypographyControls';
import { HeadingControls } from './components/HeadingControls';
import { TypographySettings } from './types';

export default function App() {
  const [settings, setSettings] = useState<TypographySettings>({
    fontFamily: 'Inter, system-ui, sans-serif',
    fontSize: 1, // 1em = 16px
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0,
    textAlign: 'left',
    textDecoration: 'none',
    fontStyle: 'normal',
    textTransform: 'none',
    marginBottom: 1,
    headings: {
      fontFamily: 'Georgia, serif',
      fontSize: 2, // 2em = 32px
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: -0.03,
      marginBottom: 1.5
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Type className="w-6 h-6 text-indigo-600" />
          <h1 className="text-xl font-semibold text-gray-900">Typography Playground</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Preview settings={settings} />
          </div>
          <div className="space-y-8">
            <TypographyControls settings={settings} setSettings={setSettings} />
            <HeadingControls settings={settings} setSettings={setSettings} />
          </div>
        </div>
      </main>
    </div>
  );
}