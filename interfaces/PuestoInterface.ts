import { Document } from "mongoose";

export interface IPuesto extends Document {
  name: string;
  zona: string;
}
