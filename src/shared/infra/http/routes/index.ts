import { Router } from 'express';
import Container from 'typedi';

import multer from 'multer';
import uploadConfig from '@config/upload';

import { DronesController } from '@modules/drones/drones.controller';

const routes = Router();

const upload = multer(uploadConfig);

const dronesController = Container.get(DronesController);

routes.get('/drones/process', upload.single('input'), dronesController.process);

export default routes;
