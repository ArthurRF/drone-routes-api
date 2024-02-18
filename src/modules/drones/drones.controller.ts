import { Request, Response } from 'express';
import Container, { Service } from 'typedi';
import { RemoveLocalFile } from '@shared/utils/remove-local-file';
import { ProcessDronesUseCase } from './process-drones.usecase';

interface IFile {
  filename: string;
}

@Service()
export class DronesController {
  async process(req: Request, res: Response): Promise<Response> {
    const processDronesUseCase = Container.get(ProcessDronesUseCase);
    const removeLocalFile = Container.get(RemoveLocalFile);
    const file = req.file as IFile;

    if (!file.filename) {
      return res.status(400).json({ message: 'Invalid file' });
    }

    const returnData = await processDronesUseCase.execute({
      filename: file.filename,
    });

    removeLocalFile.execute(file.filename);

    return res.status(200).json(returnData);
  }
}
