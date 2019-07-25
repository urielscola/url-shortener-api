import { ERROR_CODES } from '../constants/errors';

const buildi18nErrMessage = ({ __, resource, method, err }) =>
  __(`api.${resource}.${method}.${err.message.toLowerCase()}`);

export const globalErrorHandler = (err, req, res, next) => {
  const { resource, method } = req;
  const responseCode = `${resource}.${method}`;

  if (!err.message || !ERROR_CODES[err.message]) {
    return res
      .status(ERROR_CODES.NOT_IMPLEMENTED)
      .send({ code: responseCode, message: req.__('api.error.throw') });
  }

  const i18nErrMessage = buildi18nErrMessage({ ...req, err });
  const status = ERROR_CODES[err.message];

  return res
    .status(status)
    .send({ code: responseCode, message: i18nErrMessage });
};
