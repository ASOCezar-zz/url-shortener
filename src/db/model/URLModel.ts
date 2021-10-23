import { getModelForClass } from '@typegoose/typegoose';
import URL from '../schema/Schema';

const URLModel = getModelForClass(URL);

export default URLModel;
