import { createContext, useContext, type ReactNode } from 'react';
import type { RegionInfo } from '@/data/regions';

const RegionContext = createContext<RegionInfo | null>(null);

interface RegionProviderProps {
  region: RegionInfo;
  children: ReactNode;
}

export function RegionProvider({ region, children }: RegionProviderProps) {
  return <RegionContext.Provider value={region}>{children}</RegionContext.Provider>;
}

export function useRegion(): RegionInfo {
  const ctx = useContext(RegionContext);
  if (!ctx) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return ctx;
}
