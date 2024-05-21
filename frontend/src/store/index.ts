import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface Store {
  user: string;
}
export const useAppStore = create(
  persist<Store>(
    (set, get) => ({
      user: "user",
    }),
    {
      name: "rrhh_store",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
