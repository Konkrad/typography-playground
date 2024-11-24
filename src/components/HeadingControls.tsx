import React from 'react';
import { Type } from 'lucide-react';
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

export function HeadingControls({ settings, setSettings }: Props) {
  const updateHeadings = (update: Partial<TypographySettings['headings']>) => {
    setSettings({
      ...settings,
      headings: { ...settings.headings, ...update }
    });
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center gap-2">
        <Type className="w-5 h-5 text-gray-500" />
        <h2 className="text-lg font-medium text-gray-900">Heading Controls</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Font Family</label>
          <select
            value={settings.headings.fontFamily}
            onChange={(e) => updateHeadings({ fontFamily: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            {fontFamilies.map(font => (
              <option key={font} value={font}>{font.split(',')[0]}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Font Size ({settings.headings.fontSize}em)
          </label>
          <input
            type="range"
            min="1"
            max="6"
            step="0.1"
            value={settings.headings.fontSize}
            onChange={(e) => updateHeadings({ fontSize: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Font Weight ({settings.headings.fontWeight})
          </label>
          <input
            type="range"
            min="100"
            max="900"
            step="100"
            value={settings.headings.fontWeight}
            onChange={(e) => updateHeadings({ fontWeight: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Line Height ({settings.headings.lineHeight})
          </label>
          <input
            type="range"
            min="0.8"
            max="2"
            step="0.1"
            value={settings.headings.lineHeight}
            onChange={(e) => updateHeadings({ lineHeight: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Letter Spacing ({settings.headings.letterSpacing}em)
          </label>
          <input
            type="range"
            min="-0.1"
            max="0.2"
            step="0.01"
            value={settings.headings.letterSpacing}
            onChange={(e) => updateHeadings({ letterSpacing: Number(e.target.value) })}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bottom Margin ({settings.headings.marginBottom}em)
          </label>
          <input
            type="range"
            min="0"
            max="4"
            step="0.1"
            value={settings.headings.marginBottom}
            onChange={(e) => updateHeadings({ marginBottom: Number(e.target.value) })}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}