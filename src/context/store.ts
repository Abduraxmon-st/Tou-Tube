import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Store {
  sidebarToggle: boolean;
  setSidebarToggle: (value: boolean) => void;
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      sidebarToggle: false,

      setSidebarToggle: (sidebarToggle) =>
        set({ sidebarToggle })
    }),
    {
      name: "TueTube",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
