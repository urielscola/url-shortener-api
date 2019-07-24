import { Request, Response } from 'express';
import ShortenerService from '../services/ShortenerService';

class ShortenerController {
  static async store(req: Request, res: Response): Promise<Response> {
    const shortenedLink = await ShortenerService.store(req.body);
    return res.status(200).send(shortenedLink);
  }
}

export default ShortenerController;
