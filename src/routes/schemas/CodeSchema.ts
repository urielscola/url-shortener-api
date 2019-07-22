import Joi from 'joi';
import RouteValidator from '../../middlewares/RouteValidator';

class CodeSchema extends RouteValidator {
  static get find() {
    const schema = {
      params: Joi.object().keys({
        code: Joi.string().required()
      })
    };
    return this.validate(schema);
  }
}

export default CodeSchema;
