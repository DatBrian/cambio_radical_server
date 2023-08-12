import { Schema, model } from "mongoose";
import { IVotante } from "../interfaces/VotanteInterface";

class VotanteSchema {
  private schema: Schema<IVotante>;

  constructor() {
    this.schema = new Schema<IVotante>(
      {
        name: {
          type: String,
          required: true,
          unique: true,
          trim: true,
        },
        lider: {
          type: String,
          required: true,
          trim: true,
        },
        doc: {
          type: Number,
          required: true,
          unique: true,
          trim: true,
        },
        genero: {
          type: String,
          required: true,
          trim: true,
        },
        celular: {
          type: Number,
          required: true,
          trim: true,
        },
        nacimiento: {
          type: Date,
          required: true,
          trim: true,
        },
        telefono: {
          type: Number,
          required: true,
          unique: true,
          trim: true,
        },
        direccion: {
          type: String,
          required: true,
          trim: true,
        },
        barrio: {
          type: String,
          required: true,
          trim: true,
        },
        comuna: {
          type: Number,
          required: true,
          trim: true,
        },
        email: {
          type: String,
          required: true,
          trim: true,
        },
        profesion: {
          type: String,
          required: true,
          trim: true,
        },
        ocupacion: {
          type: String,
          required: true,
          trim: true,
        },
        RS: [
          {
            type: Object,
            required: false,
            unique: true,
            trim: true,
          },
        ],
        PuestoVotacion: {
          type: String,
          required: true,
          trim: true,
        },
        MesaVotacion: {
          type: Number,
          required: true,
          trim: true,
        },
        compromiso: {
          type: String,
          required: true,
          trim: true,
        },
        fidelidad: {
          type: String,
          required: true,
          trim: true,
        },
      },
      {
        timestamps: true,
        versionKey: false,
      }
    );

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
