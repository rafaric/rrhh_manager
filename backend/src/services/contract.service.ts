import { prisma } from '../database';
import { ContractData } from '../types/contract';
import userService from './user.service';
import cargoService from './cargo.service';
import { HttpException } from '../utils/HttpException';
import { CODE } from '../utils/constants';

class ContractService {
	public create = async (data: ContractData) => {
		const usuarioFound = await userService.getById(data.usuarioId!);

		if (usuarioFound.contrato.length !== 0) {
			throw new HttpException(CODE.BAD_REQUEST, 'Ya hay un contrato Activo');
		}

		const cargoFound = await cargoService.getById(data.cargoId!);

		const contract = await prisma.contrato.create({
			data: {
				salario: data.salario,
				status: 'ACTIVO',
				descripcion: data.descripcion,
				fecha_inicio: new Date(data.fecha_inicio),
				fecha_fin: new Date(data.fecha_fin),
				usuarioId: usuarioFound.id,
				cargoId: cargoFound.id
			}
		});

		return contract;
	};
}

export default new ContractService();
