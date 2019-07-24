import { Router } from 'express';
import shortenRoutes from './shortenRoutes';
import linkRoutes from './linkRoutes';

const routes = Router();

routes.use('/not-found', (req, res) => res.send('not found'));
routes.use('/api/shorten', shortenRoutes);
routes.use('/', linkRoutes);

export default routes;
