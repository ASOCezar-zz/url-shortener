import URLModel from 'src/db/model/URLModel';
import { IURL } from 'src/db/schema/Schema';

export default class FindURLByHashService {
  constructor(private urlModel = URLModel) {}

  public async execute(hash: string): Promise<IURL | null> {
    const savedUrl = await this.urlModel.findOne({ hash });

    return savedUrl;
  }
}
