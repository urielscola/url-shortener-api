import { Router } from 'express';
import ShortenerController from '../controllers/ShortenerController';
import ShortenSchema from '../middlewares/schemas/ShortenSchema';
import { checkValidUrl } from '../middlewares/isValidUrl';

const routes = Router();

routes.post(
  '/',
  ShortenSchema.shorten,
  checkValidUrl,
  ShortenerController.store
);

export default routes;
