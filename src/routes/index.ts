import { Router } from 'express';
import URLController from 'src/controllers/URLController';
import MongoConnection from 'src/db/MongoConnection';

const appRoutes = Router();

const urlController = new URLController();

const database = new MongoConnection();
database.connect();

appRoutes.post('/shortener', urlController.shortener);

appRoutes.get('/:hash', urlController.redirect);

export default appRoutes;
