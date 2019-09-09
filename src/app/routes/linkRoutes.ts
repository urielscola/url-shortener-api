import { Router } from 'express';
import LinkController from '../controllers/LinkController';
import LinkSchema from '../middlewares/schemas/LinkSchema';

const routes = Router();

routes
  .get('/:hashCode', LinkSchema.find, LinkController.find)
  .get('/', (req, res) => res.send('opa'));

export default routes;
