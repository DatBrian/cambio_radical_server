import { Schema, model } from "mongoose";
import { IVotante } from "../interfaces/VotanteInterface";
import  mongoosePaginate from 'mongoose-paginate-v2'

class VotanteSchema {
  private schema: Schema<IVotante>;

  constructor() {
    this.schema = new Schema<IVotante>(
      {
        name: {
          type: String,
          unique: true,
          trim: true,
        },
        lider: {
          type: String,
          trim: true,
        },
        doc: {
          type: Number,
          unique: true,
          trim: true,
        },
        genero: {
          type: String,
          trim: true,
        },
        celular: {
          type: Number,
          trim: true,
        },
        nacimiento: {
          type: Date,
          trim: true,
        },
        telefono: {
          type: Number,
          unique: false,
          trim: true,
        },
        direccion: {
          type: String,
          trim: true,
        },
        barrio: {
          type: String,
          trim: true,
        },
        comuna: {
          type: Number,
          trim: true,
        },
        email: {
          type: String,
          trim: true,
        },
        profesion: {
          type: String,
          trim: true,
        },
        ocupacion: {
          type: String,
          trim: true,
        },
        RS: [
          {
            type: Object,
            required: false,
            unique: false,
            trim: true,
          },
        ],
        PuestoVotacion: {
          type: String,
          unique: false,
          trim: true,
        },
        MesaVotacion: {
          type: Number,
          trim: true,
        },
        compromiso: {
          type: String,
          trim: true,
        },
        fidelidad: {
          type: String,
          trim: true,
        },
        observaciones: {
          type: String,
          trim: true,
        },
      },
      {
        timestamps: true,
        versionKey: false,
      }
    );

    this.schema.plugin(mongoosePaginate);

    this.schema.set("toJSON", {
      transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
      },
    });
  }

  public getModel() {
    const votante = model<IVotante>("Votante", this.schema);
    return votante;
  }
}

export const votanteModel = new VotanteSchema().getModel();
export default VotanteSchema;
