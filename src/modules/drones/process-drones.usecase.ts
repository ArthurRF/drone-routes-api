import { Service } from 'typedi';

interface IProps {
  filename: string;
}

@Service()
export class ProcessDronesUseCase {
  async execute({ filename }: IProps): Promise<{ message: string }> {
    // adicionar o processamento do arquivo

    return { message: filename };
  }
}
