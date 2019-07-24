import { Router } from 'express';
import ShortenerController from '../controllers/ShortenerController';
import ShortenSchema from './schemas/ShortenSchema';

const routes = Router();

routes.post('/', ShortenSchema.shorten, ShortenerController.store);

export default routes;
