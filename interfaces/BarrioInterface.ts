import { Document } from "mongoose";

export interface IBarrio extends Document {
  name: string;
  comuna: number;
}