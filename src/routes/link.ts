import { Router } from 'express';
import LinkController from '../controllers/LinkController';
import LinkSchema from './schemas/LinkSchema';

const routes = Router();

routes
  .get('/', (req, res) => res.send('opa'))
  .get('/:hashCode', LinkSchema.find, LinkController.find);

export default routes;
