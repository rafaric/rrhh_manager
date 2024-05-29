import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { User } from "~/modules";
interface Store {
  user: User;
  setUser: (newUser: User) => void;
}
export const useAppStore = create(
  persist<Store>(
    (set) => ({
      user: {
        id: "",
        email: "",
        password: "",
        rol: "",
        nombre: "",
        apellido: "",
        dni: 0,
      },
      setUser: (newUser) => set({ user: newUser }),
    }),
    {
      name: "rrhh_store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
