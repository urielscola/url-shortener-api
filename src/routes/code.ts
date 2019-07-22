import { Router } from 'express';
import CodeController from '../controllers/CodeController';
import CodeSchema from './schemas/CodeSchema';

const routes = Router();

routes.get('/:code', CodeSchema.find, CodeController.find);

export default routes;
