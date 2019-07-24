import Joi from 'joi';
import RouteValidator from '../../middlewares/RouteValidator';

class ShortenSchema extends RouteValidator {
  static get shorten() {
    const schema = {
      body: Joi.object().keys({
        fullLink: Joi.string().required()
      })
    };
    return this.validate(schema);
  }
}

export default ShortenSchema;
