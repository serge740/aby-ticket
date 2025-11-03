import { Request } from 'express';

export interface RequestWithClient extends Request {
  admin?: {
    id: string;
    role: string;
  };
}
