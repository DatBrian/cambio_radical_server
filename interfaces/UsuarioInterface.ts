import { Document } from 'mongoose';

export interface IUsuario extends Document {
  username: string;
  password: string;
  role: any;
}