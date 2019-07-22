import Url from '../models/Url';

class CodeService {
  static async find({ code }): Promise<any> {
    console.log({ code });
    const existingUrl = await Url.findOne({ urlCode: code });
    return existingUrl;
  }
}

export default CodeService;
