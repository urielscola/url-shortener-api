import { Request, Response } from 'express';
import LinkService from '../services/LinkService';

class CodeController {
  static async find(req: Request, res: Response): Promise<void> {
    const shortenedLink = await LinkService.find(req.params);
    if (shortenedLink) return res.redirect(shortenedLink.fullLink);

    return res.redirect(`${process.env.PUBLIC_URL}/not-found`);
  }
}

export default CodeController;
