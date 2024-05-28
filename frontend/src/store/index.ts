import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface Store {
  user: {};
  setUser: (newUser: {}) => void;
}
export const useAppStore = create(
  persist<Store>(
    (set) => ({
      user: {},
      setUser: (newUser) => set({ user: newUser }),
    }),
    {
      name: "rrhh_store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
