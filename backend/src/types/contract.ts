import { Contrato } from '@prisma/client';

export type ContractData = Pick<
	Contrato,
	'salario' | 'descripcion' | 'cargo_id' | 'fecha_fin' | 'fecha_inicio'
>;
