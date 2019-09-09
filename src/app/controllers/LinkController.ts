import LinkService from '../services/LinkService';

const RESOURCE = 'link';
class LinkController {
  static async find(req, res, next): Promise<void> {
    try {
      const shortenedLink = await LinkService.find(req.params);
      if (shortenedLink) return res.redirect(shortenedLink.fullLink);

      return res.redirect(`${process.env.PUBLIC_URL}/p/not-found`);
    } catch (err) {
      req.resource = RESOURCE;
      req.method = 'find';
      next(err);
    }
  }
}

export default LinkController;
