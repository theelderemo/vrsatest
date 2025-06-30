import React from 'react';
import { useStyleKits } from './StyleKitProvider';

export default function StyleKitMarketplace({ onSelectKit, onCreateKit }) {
  const { kits } = useStyleKits();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-indigo-400">Browse Style Kits</h2>
        <button onClick={onCreateKit} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Create New Kit</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kits.length === 0 && <div className="col-span-full text-slate-400">No kits available yet.</div>}
        {kits.map(kit => (
          <div key={kit.id} className="bg-slate-800 rounded-lg shadow p-4 hover:shadow-lg transition cursor-pointer border border-slate-700 hover:border-indigo-500" onClick={() => onSelectKit(kit)}>
            <h3 className="text-lg font-semibold text-indigo-300 mb-2">{kit.name}</h3>
            <p className="text-slate-400 text-sm mb-2">{kit.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {kit.tags && kit.tags.map(tag => (
                <span key={tag} className="bg-indigo-700 text-white text-xs px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
