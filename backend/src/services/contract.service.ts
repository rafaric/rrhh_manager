import { Usuario } from '@prisma/client';
import { prisma } from '../database';
import { ContractData } from '../types/contract';
import userService from './user.service';
import cargoService from './cargo.service';

class ContractService {
	public create = async (id: Usuario['id'], data: ContractData) => {
		const usuarioFound = await userService.getById(id);

		const cargoFound = await cargoService.getById(data.cargo_id);

		const contract = await prisma.contrato.create({
			data: {
				cargo_id: cargoFound.id,
				salario: data.salario,
				status: 'ACTIVO',
				descripcion: data.descripcion,
				fecha_inicio: new Date(data.fecha_inicio),
				fecha_fin: new Date(data.fecha_fin)
			}
		});

		const userData = {
			contrato_id: contract.id
		};

		await userService.update(usuarioFound.id, userData);

		return contract;
	};
}

export default new ContractService();
