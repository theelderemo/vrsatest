import React, { useState } from 'react';
import { useStyleKits } from './StyleKitProvider';
import { useUser } from './UserProvider';

export default function CreateStyleKit({ onBack }) {
  const { addKit } = useStyleKits();
  const { user } = useUser();
  const [artistStyleName, setArtistStyleName] = useState('');
  const [genre, setGenre] = useState('');
  const [temperature, setTemperature] = useState(1);
  const [topP, setTopP] = useState(1);
  const [coreTheme, setCoreTheme] = useState('');
  const [mood, setMood] = useState('');
  const [stylePalette, setStylePalette] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!artistStyleName.trim()) {
      setError('Artist/Style Name is required');
      return;
    }
    addKit({
      id: Date.now().toString(),
      name: artistStyleName,
      artistStyleName,
      genre,
      temperature,
      topP,
      coreTheme,
      mood,
      stylePalette,
      additionalInfo,
      description,
      tags: tags.split(',').map(t => t.trim()).filter(Boolean),
      content,
    });
    onBack();
  };

  if (!user) {
    return (
      <div className="max-w-lg mx-auto p-6 text-center">
        <div className="bg-slate-800 rounded-lg shadow p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-indigo-400 mb-2">Login Required</h2>
          <p className="text-slate-300 mb-4">You must be logged in to create a style kit.</p>
          <button onClick={onBack} className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600">&larr; Back to Kits</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <button onClick={onBack} className="mb-4 px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600">&larr; Back to Kits</button>
      <form onSubmit={handleSubmit} className="bg-slate-800 rounded-lg shadow p-6 border border-slate-700 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-indigo-400 mb-2">Create a New Style Kit</h2>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <input
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Artist/Style Name*"
          value={artistStyleName}
          onChange={e => setArtistStyleName(e.target.value)}
        />
        <input
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Genre"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        />
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-xs text-slate-400 mb-1">Temperature: {temperature}</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.01"
              value={temperature}
              onChange={e => setTemperature(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs text-slate-400 mb-1">Top-p: {topP}</label>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.01"
              value={topP}
              onChange={e => setTopP(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
        </div>
        <textarea
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Core Theme (optional)"
          value={coreTheme}
          onChange={e => setCoreTheme(e.target.value)}
        />
        <textarea
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Mood (optional)"
          value={mood}
          onChange={e => setMood(e.target.value)}
        />
        <textarea
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Style Palette (optional)"
          value={stylePalette}
          onChange={e => setStylePalette(e.target.value)}
        />
        <textarea
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Additional Info (optional)"
          value={additionalInfo}
          onChange={e => setAdditionalInfo(e.target.value)}
        />
        <input
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Kit Name (legacy, not used)"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ display: 'none' }}
        />
        <textarea
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />
        <textarea
          className="bg-slate-900 border border-slate-700 rounded p-2 text-white"
          placeholder="Kit Content (optional)"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={6}
        />
        <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 mt-2">Create Kit</button>
      </form>
    </div>
  );
}
