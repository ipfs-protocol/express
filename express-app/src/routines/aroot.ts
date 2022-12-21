import { Request, Response} from 'express';
import SendResult from '../function/SendResult';

const RootView = async(req: Request, res: Response): Promise<Response<any, Record<string, any>>> =>
{
  try {
    const result = {
      status: 200,
      message: 'Web Main Page ...... OK!!',
      data: null
    };
    return res.status(200).send(SendResult.Answer(201, 'Page OK', null, result));
  } catch (error: any) {
    return res.status(500).send(SendResult.Answer(500, '', error, null));
  }
}

export default { RootView };