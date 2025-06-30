import React, { createContext, useContext, useState } from 'react';

const StyleKitContext = createContext();

export function StyleKitProvider({ children }) {
  const [kits, setKits] = useState([]); // Array of style kits
  const [selectedKit, setSelectedKit] = useState(null); // Kit for detail view

  // Add, update, remove, and select kit logic can be expanded as needed
  const addKit = (kit) => setKits(prev => [...prev, kit]);
  const updateKit = (id, updated) => setKits(prev => prev.map(kit => kit.id === id ? { ...kit, ...updated } : kit));
  const removeKit = (id) => setKits(prev => prev.filter(kit => kit.id !== id));

  return (
    <StyleKitContext.Provider value={{ kits, setKits, selectedKit, setSelectedKit, addKit, updateKit, removeKit }}>
      {children}
    </StyleKitContext.Provider>
  );
}

export function useStyleKits() {
  return useContext(StyleKitContext);
}
