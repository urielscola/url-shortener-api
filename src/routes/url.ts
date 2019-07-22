import { Router } from 'express';
import ShortenerController from '../controllers/ShortenerController';
import UrlSchema from './schemas/UrlSchema';

const routes = Router();

routes.post('/', UrlSchema.shorten, ShortenerController.store);

export default routes;
