import { Request, Response } from 'express';
import ShortenerService from '../services/ShortenerService';

class ShortenerController {
  static async store(req: Request, res: Response, next): Promise<Response> {
    try {
      const shortenedLink = await ShortenerService.store(req.body);
      return res.status(200).send(shortenedLink);
    } catch (err) {
      next(err);
    }
  }
}

export default ShortenerController;
