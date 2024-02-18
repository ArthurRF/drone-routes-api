import { Router } from 'express';
import Container from 'typedi';

import { DronesController } from '@modules/drones/drones.controller';

const routes = Router();

const dronesController = Container.get(DronesController);

routes.get('/drones/process', dronesController.process);

export default routes;
