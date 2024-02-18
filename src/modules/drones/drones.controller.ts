import { Request, Response } from 'express';
import { Service } from 'typedi';

@Service()
export class DronesController {
  async process(req: Request, res: Response): Promise<Response> {
    return res.status(200).send();
  }
}
