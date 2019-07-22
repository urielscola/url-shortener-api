import Url from '../models/Url';
import shortid from 'shortid';

class ShortenerService {
  static async store({ fullUrl }) {
    const existingUrl = await Url.findOne({ fullUrl });
    if (existingUrl) {
      return existingUrl;
    }

    const urlCode = shortid.generate();

    return Url.create({
      fullUrl,
      urlCode,
      shortUrl: `http://localhost:${process.env.PORT}/${urlCode}`
    });
  }
}

export default ShortenerService;
