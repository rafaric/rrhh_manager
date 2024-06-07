import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Holiday, User } from "~/modules";
interface Store {
  user: User;
  setUser: (newUser: User) => void;
}
interface Holidays {
  holiday: Holiday[];
  setHoliday: (newHoliday: Holiday[]) => void;
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
export const useHolidayStore = create<Holidays>((set) => ({
  holiday: [],
  setHoliday: (newHoliday: Holiday[]) => {
    set({ holiday: newHoliday });
  },
}));
