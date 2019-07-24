import { Router } from 'express';
import shortenRoutes from './shorten';
import linkRoutes from './link';

const routes = Router();

routes.use('/not-found', (req, res) => res.send('not found'));
routes.use('/api/shorten', shortenRoutes);
routes.use('/', linkRoutes);

export default routes;
