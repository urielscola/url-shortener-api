import Joi from 'joi';
import RouteValidator from '../../middlewares/RouteValidator';

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
