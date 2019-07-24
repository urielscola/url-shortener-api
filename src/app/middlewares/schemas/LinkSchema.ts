import Joi from '@hapi/joi';
import RouteValidator from '../routeValidator';

class LinkSchema extends RouteValidator {
  static get find() {
    const schema = {
      params: Joi.object().keys({
        hashCode: Joi.string().required()
      })
    };
    return this.validate(schema);
  }
}

export default LinkSchema;
