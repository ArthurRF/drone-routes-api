import multer from 'multer';
import { resolve } from 'path';
import { randomUUID } from 'node:crypto';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHash = randomUUID();
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
