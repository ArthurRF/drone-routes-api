import { AppError } from '@shared/errors/app.error';
import { unlink } from 'fs';
import { Service } from 'typedi';

@Service()
export class RemoveLocalFile {
  execute(filename: string): void {
    unlink(`tmp/${filename}`, err => {
      if (err) {
        throw new AppError(err?.message as string, 500);
      }
    });
  }
}
