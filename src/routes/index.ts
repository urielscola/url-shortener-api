import { Router } from 'express';
import urlRoutes from './url';
import codeRoutes from './code';

/* Status endpoint */
const routes = Router();
// routes.get(['/ping'], async (req, res) => res.status(200).send('pong'));
routes.use('/urls/shorten', urlRoutes);
routes.use('/', codeRoutes);

export default routes;
