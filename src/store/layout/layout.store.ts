import { create } from 'zustand'

export enum SidebarState {
  OPEN = 'open',
  CLOSED = 'closed',
}

type LayoutState = {
  sidebarState: SidebarState
  setSidebarState: (value: SidebarState) => void
}

export const useLayoutStore = create<LayoutState>((set) => ({
  sidebarState: SidebarState.OPEN,
  setSidebarState: (value: SidebarState) =>
    set(() => ({ sidebarState: value })),
}))
