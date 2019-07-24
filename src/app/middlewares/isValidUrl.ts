import { isUri } from 'valid-url';

export const checkValidUrl = (req, res, next): boolean | never => {
  const { fullLink }: { fullLink: string } = req.body;
  if (isUri(fullLink)) return next();
  throw 'Invalid link';
};
