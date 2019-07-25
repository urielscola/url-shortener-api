import ShortenerService from '../services/ShortenerService';

const RESOURCE = 'shortener';
class ShortenerController {
  static async store(req, res, next): Promise<Response> {
    try {
      const shortenedLink = await ShortenerService.store(req.body);
      return res.status(200).send(shortenedLink);
    } catch (err) {
      req.resource = RESOURCE;
      req.method = 'store';
      next(err);
    }
  }
}

export default ShortenerController;
