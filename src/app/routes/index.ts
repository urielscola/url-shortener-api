import { Router } from 'express';
import shortenRoutes from './shortenRoutes';
import linkRoutes from './linkRoutes';

const routes = Router();

routes.use('/api/shorten', shortenRoutes);
routes.use('/', linkRoutes);
routes.get('*', (req, res) => res.send('not found'));

export default routes;
