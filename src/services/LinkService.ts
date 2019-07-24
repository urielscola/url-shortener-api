import Link, { iLink } from '../models/Link';

class LinkService {
  static async find(query): Promise<iLink | null> {
    const existingLink = await Link.findOne(query);
    return existingLink;
  }

  static async store(inputLink) {
    return Link.create(inputLink);
  }
}

export default LinkService;
