import { Request, Response } from 'express';
import CodeService from '../services/CodeService';

class CodeController {
  static async find(req: Request, res: Response): Promise<Response | void> {
    const shortenedUrl = await CodeService.find(req.params);
    if (shortenedUrl) {
      return res.redirect(shortenedUrl.fullUrl);
    }
    return res.status(404).send('No url found');
  }
}

export default CodeController;
