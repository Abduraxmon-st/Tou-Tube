import { isNotDescktop } from "@/constants";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface Store {
  sidebarToggle: boolean;
  microToggle: boolean;
  inShorts: boolean;
  inSubSlug: boolean;
  inVideoPlay: boolean;
  setSidebarToggle: (value: boolean) => void;
  setMicroToggle: (value: boolean) => void;
  setInShorts: (value: boolean) => void;
  setInSubSlug: (value: boolean) => void;
  setInVideoPlay: (value: boolean) => void;
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      sidebarToggle: isNotDescktop ? false : true,
      microToggle: false,
      inShorts: false,
      inSubSlug: false,
      inVideoPlay: false,

      setInShorts: (inShorts) =>
        set({ inShorts }),

      setInVideoPlay: (inVideoPlay) =>
        set({ inVideoPlay }),

      setSidebarToggle: (sidebarToggle) =>
        set({ sidebarToggle }),

      setMicroToggle: (microToggle) =>
        set({ microToggle }),

      setInSubSlug: (inSubSlug) =>
        set({ inSubSlug }),
    }),

    {
      name: "TueTube",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
