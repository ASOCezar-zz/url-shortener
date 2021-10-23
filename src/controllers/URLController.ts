import { Request, Response } from 'express';
import shortid from 'shortid';
import FindURLByHashService from 'src/services/FindURLByHashService';
import FindURLByOriginURLService from 'src/services/FindURLByOriginURLService';

import SaveURLService from 'src/services/SaveURLService';

export default class URLController {
  public async shortener(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { originURL } = request.body;

    const findURLService = new FindURLByOriginURLService();

    const foundURL = await findURLService.execute(originURL);

    if (foundURL) {
      return response.status(200).json(foundURL);
    }

    const saveURLService = new SaveURLService();

    const hash = shortid.generate();

    const shortURL = `${process.env.API_URL}:${process.env.API_PORT}/${hash}`;

    await saveURLService.execute({
      originURL,
      hash,
      shortURL,
    });

    return response.json({
      originURL,
      hash,
      shortURL,
    });
  }

  public async redirect(request: Request, response: Response) {
    const { hash } = request.params;

    const findURLService = new FindURLByHashService();

    const foundURL = await findURLService.execute(hash);

    if (!foundURL) {
      return response.status(400).json('URL not found');
    }

    response.redirect(foundURL.originURL);
    return;
  }
}
