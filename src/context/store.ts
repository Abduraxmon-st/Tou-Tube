import { isNotDescktop } from "@/constants";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Store {
  sidebarToggle: boolean;
  setSidebarToggle: (value: boolean) => void;
  microToggle: boolean;
  setMicroToggle: (value: boolean) => void;
  inShorts: boolean;
  setInShorts: (value: boolean) => void;
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      sidebarToggle: isNotDescktop ? false : true,
      microToggle: false,
      inShorts: false,

      setInShorts: (inShorts) =>
        set({ inShorts }),

      setSidebarToggle: (sidebarToggle) =>
        set({ sidebarToggle }),

      setMicroToggle: (microToggle) =>
        set({ microToggle })
    }),

    {
      name: "TueTube",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
