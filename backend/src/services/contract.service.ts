import { prisma } from '../database';
import { ContractData } from '../types/contract';
import userService from './user.service';
import cargoService from './cargo.service';

class ContractService {
	public create = async (data: ContractData) => {
		const usuarioFound = await userService.getById(data.usuarioId!);

		if (usuarioFound.contrato) {
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
