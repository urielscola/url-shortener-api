import Joi from 'joi';

class RouteValidator {
  static validate(schema) {
    return this._validate.bind(schema);
  }

  static _validate(req, res, next) {
    const data = {};
    const schema = this;

    Object.keys(schema).map(k => {
      data[k] = req[k];
      return k;
    });

    console.log(data);

    const validation = Joi.validate(data, schema, {
      allowUnknown: true
    });

    if (!validation.error) {
      next();
    } else {
      res.status(400).send({
        success: false,
        messages: validation.error.details
      });
    }
  }
}

export default RouteValidator;
