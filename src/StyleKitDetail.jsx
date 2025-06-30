import React from 'react';
import { useStyleKits } from './StyleKitProvider';

export default function StyleKitDetail({ kit, onBack }) {
  if (!kit) return null;
  return (
    <div className="max-w-2xl mx-auto p-6">
      <button onClick={onBack} className="mb-4 px-3 py-1 bg-slate-700 text-white rounded hover:bg-slate-600">&larr; Back to Kits</button>
      <div className="bg-slate-800 rounded-lg shadow p-6 border border-slate-700">
        <h2 className="text-2xl font-bold text-indigo-400 mb-2">{kit.name}</h2>
        <p className="text-slate-300 mb-4">{kit.description}</p>
        <div className="mb-4">
          <strong className="text-slate-400">Tags:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {kit.tags && kit.tags.map(tag => (
              <span key={tag} className="bg-indigo-700 text-white text-xs px-2 py-1 rounded">{tag}</span>
            ))}
          </div>
        </div>
        {kit.content && (
          <div className="mt-4">
            <strong className="text-slate-400">Kit Content:</strong>
            <pre className="bg-slate-900 rounded p-4 mt-2 text-slate-200 whitespace-pre-wrap text-sm">{kit.content}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
