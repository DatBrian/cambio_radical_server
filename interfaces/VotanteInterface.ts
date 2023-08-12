import { Document } from "mongoose";

export interface IVotante extends Document {
  name: string;
  lider: string;
  doc: number;
  genero: string;
  nacimiento: Date;
  celular: number;
  telefono: number;
  direccion: string;
  barrio: string;
  comuna: number;
  email: string;
  profesion: string;
  ocupacion: string;
  RS: Array<string>;
  PuestoVotacion: string;
  MesaVotacion: number;
  compromiso: string;
  fidelidad: string;
}
