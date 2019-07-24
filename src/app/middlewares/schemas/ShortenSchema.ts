import Joi from '@hapi/joi';
import RouteValidator from '../routeValidator';

class ShortenSchema extends RouteValidator {
  static get shorten() {
    const schema = {
      body: Joi.object().keys({
        fullLink: Joi.string()
          .uri()
          .required()
      })
    };
    return this.validate(schema);
  }
}

export default ShortenSchema;
