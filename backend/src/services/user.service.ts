import { Usuario } from "@prisma/client";
import { UserData, UserResponse } from "../types/user";
import { prisma } from "../config/prisma";
import { HttpException } from "../utils/HttpException";
import { CODE } from "../utils/constants";
import {
	comparePassword,
	generateJwt,
	hashPassword
} from "../utils/authHandler";

class UserService {
	public findByEmail = async (email: UserData["email"]) => {
		const user: Usuario | null = await prisma.usuario.findUnique({
			where: { email }
		});

		if (!user) {
			return null;
		}

		return true;
	};

	public createUser = async (data: UserData) => {
		const userExists = await this.findByEmail(data.email);

		if (userExists) {
			throw new HttpException(CODE.BAD_REQUEST, "El usuario ya existe");
		}

		data.password = await hashPassword(data.password);

		const newUser: UserResponse = await prisma.usuario.create({
			data,
			select: { id: true, email: true, rol: true }
		});

		if (!newUser) {
			throw new HttpException(CODE.BAD_REQUEST, "No se pudo crear el usuario");
		}

		return newUser;
	};

	public login = async (data: UserData) => {
		const userFound = await prisma.usuario.findUnique({
			where: { email: data.email }
		});

		if (!userFound) {
			throw new HttpException(
				CODE.UNAUTHORIZED_ACCESS,
				"El email es incorrecto"
			);
		}

		const isPassword = await comparePassword(data.password, userFound.password);

		if (!isPassword) {
			throw new HttpException(
				CODE.UNAUTHORIZED_ACCESS,
				"La password es incorrecta"
			);
		}

		const payload: UserResponse = {
			id: userFound.id,
			email: userFound.email,
			rol: userFound.rol
		};

		const token = generateJwt(payload);

		return token;
	};
}

export default new UserService();
