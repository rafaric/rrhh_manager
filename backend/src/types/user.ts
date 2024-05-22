import { Usuario } from "@prisma/client";

export type UserData = Pick<Usuario, "email" | "password">;

export type UserResponse = Pick<Usuario, "id" | "email" | "rol">;
