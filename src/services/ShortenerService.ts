import LinkService from './LinkService';
import shortid from 'shortid';

class ShortenerService {
  static async store({ fullLink }): Promise<any> {
    const existingLink = await LinkService.find({ fullLink });
    if (existingLink) return existingLink;

    const hashCode = shortid.generate();
    const shortLink = `${process.env.PUBLIC_URL}/${hashCode}`;

    return LinkService.store({ fullLink, hashCode, shortLink });
  }
}

export default ShortenerService;
