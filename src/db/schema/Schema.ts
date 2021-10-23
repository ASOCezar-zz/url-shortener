import { prop } from '@typegoose/typegoose';

export interface IURL {
  originURL: string;
  hash: string;
  shortURL: string;
}

export default class URL implements IURL {
  @prop({ required: true })
  public originURL: string;

  @prop({ required: true })
  public hash: string;

  @prop({ required: true })
  public shortURL: string;
}
