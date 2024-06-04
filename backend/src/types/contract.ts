import { Contrato } from '@prisma/client';

export type ContractData = Pick<
	Contrato,
	| 'salario'
	| 'descripcion'
	| 'fecha_fin'
	| 'fecha_inicio'
	| 'cargoId'
	| 'usuarioId'
>;
