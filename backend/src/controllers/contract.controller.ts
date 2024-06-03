import { Request, Response } from 'express';
import { errorMessage } from '../utils/HandleError';
import ContractService from '../services/contract.service';
import { CODE } from '../utils/constants';

class ContractController {
	public create = async (req: Request, res: Response) => {
		try {
			const { body } = req;
			const newContract = await ContractService.create(body);
			res
				.status(CODE.CREATED)
				.json({ data: newContract, message: 'Contrato Creado' });
		} catch (error) {
			errorMessage(res, error);
		}
	};
}

export default new ContractController();
