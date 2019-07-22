import Joi from 'joi';
import RouteValidator from '../../middlewares/RouteValidator';

class UrlSchema extends RouteValidator {
  static get shorten() {
    const schema = {
      body: Joi.object().keys({
        fullUrl: Joi.string().required()
      })
    };
    return this.validate(schema);
  }
}

export default UrlSchema;
