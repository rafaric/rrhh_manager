import { Router } from 'express';
import ContractController from '../controllers/contract.controller';
import { body, param } from 'express-validator';
import { HandleInputErrors } from '../middlewares/validationInput';
import { isAdmin } from '../middlewares/validateAdmin';

const router: Router = Router();

router.use(isAdmin);

router.post(
	'/:id',
	param('id').isUUID().withMessage('ID no valido'),
	body('salario')
		.notEmpty()
		.isInt()
		.withMessage('el salario debe ser un entero'),
	body('descripcion')
		.notEmpty()
		.isString()
		.withMessage('La descripcion debe ser un string'),
	body('cargo_id')
		.notEmpty()
		.isUUID()
		.withMessage('El cargo_id debe ser UUID valido'),
	body('fecha_inicio').notEmpty().isDate().withMessage('fecha requerida'),
	body('fecha_fin').notEmpty().isDate().withMessage('fecha requerida'),
	HandleInputErrors,
	ContractController.create
);

export default router;
