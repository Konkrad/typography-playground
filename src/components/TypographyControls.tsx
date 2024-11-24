import React from 'react';
import { Settings, AlignCenter, AlignLeft, AlignRight, AlignJustify, MoveHorizontal, MoveVertical } from 'lucide-react';
import { TypographySettings } from '../types';

interface Props {
  settings: TypographySettings;
  setSettings: (settings: TypographySettings) => void;
}

const fontFamilies = [
  'Inter, system-ui, sans-serif',
  'Georgia, serif',
  'Menlo, monospace',
  'Helvetica Neue, sans-serif',
  'Times New Roman, serif'
];

export function TypographyControls({ settings, setSettings }: Props) {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-2">
        <Settings className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-medium text-gray-900">Typography Controls</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Font Family</label>
          <select
            value={settings.fontFamily}
            onChange={(e) => setSettings({ ...settings, fontFamily: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {fontFamilies.map(font => (
              <option key={font} value={font}>{font.split(',')[0]}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Font Size ({settings.fontSize}em)</label>
          <input
            type="range"
            min="0.5"
            max="4"
            step="0.1"
            value={settings.fontSize}
            onChange={(e) => setSettings({ ...settings, fontSize: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Font Weight ({settings.fontWeight})</label>
          <input
            type="range"
            min="100"
            max="900"
            step="100"
            value={settings.fontWeight}
            onChange={(e) => setSettings({ ...settings, fontWeight: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Line Height ({settings.lineHeight})</label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={settings.lineHeight}
            onChange={(e) => setSettings({ ...settings, lineHeight: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Letter Spacing ({settings.letterSpacing}em)</label>
          <div className="flex items-center gap-2">
            <MoveHorizontal className="w-4 h-4 text-gray-500" />
            <input
              type="range"
              min="-0.1"
              max="0.5"
              step="0.01"
              value={settings.letterSpacing}
              onChange={(e) => setSettings({ ...settings, letterSpacing: Number(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Word Spacing ({settings.wordSpacing}em)</label>
          <div className="flex items-center gap-2">
            <MoveVertical className="w-4 h-4 text-gray-500" />
            <input
              type="range"
              min="-0.1"
              max="0.5"
              step="0.01"
              value={settings.wordSpacing}
              onChange={(e) => setSettings({ ...settings, wordSpacing: Number(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Text Align</label>
          <div className="flex gap-2">
            {[
              { value: 'left', icon: AlignLeft },
              { value: 'center', icon: AlignCenter },
              { value: 'right', icon: AlignRight },
              { value: 'justify', icon: AlignJustify }
            ].map(({ value, icon: Icon }) => (
              <button
                key={value}
                onClick={() => setSettings({ ...settings, textAlign: value as any })}
                className={`p-2 rounded ${settings.textAlign === value ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Text Decoration</label>
          <select
            value={settings.textDecoration}
            onChange={(e) => setSettings({ ...settings, textDecoration: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="none">None</option>
            <option value="underline">Underline</option>
            <option value="line-through">Line Through</option>
            <option value="overline">Overline</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Font Style</label>
          <select
            value={settings.fontStyle}
            onChange={(e) => setSettings({ ...settings, fontStyle: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="normal">Normal</option>
            <option value="italic">Italic</option>
            <option value="oblique">Oblique</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Text Transform</label>
          <select
            value={settings.textTransform}
            onChange={(e) => setSettings({ ...settings, textTransform: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="none">None</option>
            <option value="uppercase">Uppercase</option>
            <option value="lowercase">Lowercase</option>
            <option value="capitalize">Capitalize</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bottom Margin ({settings.marginBottom}em)
          </label>
          <input
            type="range"
            min="0"
            max="4"
            step="0.1"
            value={settings.marginBottom}
            onChange={(e) => setSettings({...settings,  marginBottom: Number(e.target.value) })}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}