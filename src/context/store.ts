import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Store {
  sidebarToggle: boolean;
  setSidebarToggle: (value: boolean) => void;
  microToggle: boolean;
  setMicroToggle: (value: boolean) => void;
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      sidebarToggle: false,
      microToggle: false,

      setSidebarToggle: (sidebarToggle) =>
        set({ sidebarToggle }),

      setMicroToggle: (microToggle) =>
        set({ microToggle })
    }),

    {
      name: "TueTube",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
