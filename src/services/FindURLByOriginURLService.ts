import URLModel from 'src/db/model/URLModel';
import { IURL } from 'src/db/schema/Schema';

export default class FindURLService {
  constructor(private urlModel = URLModel) {}

  public async execute(originURL: string): Promise<IURL | null> {
    const savedUrl = await this.urlModel.findOne({ originURL });

    return savedUrl;
  }
}
