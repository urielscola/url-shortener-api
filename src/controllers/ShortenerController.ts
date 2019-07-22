import ShortenerService from '../services/ShortenerService';

class ShortenerController {
  static async store(req, res) {
    const shortenedUrl = await ShortenerService.store(req.body);
    return res.status(201).send(shortenedUrl);
  }
}

export default ShortenerController;
