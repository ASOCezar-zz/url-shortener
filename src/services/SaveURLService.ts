import URLModel from 'src/db/model/URLModel';
import { IURL } from 'src/db/schema/Schema';

export default class SaveURLService {
  constructor(private urlModel = URLModel) {}

  public async execute({ originURL, hash, shortURL }: IURL): Promise<IURL> {
    const urlSaved = await this.urlModel.create({ originURL, hash, shortURL });

    return urlSaved;
  }
}
