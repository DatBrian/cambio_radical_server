import { Schema, model } from "mongoose";
import { IUsuario } from "../interfaces/UsuarioInterface";
import bcrypt from "bcryptjs";

class UsuarioSchema {
  protected schema: Schema;

  constructor() {
    this.schema = new Schema(
      {
        username: {
          type: String,
          required: true,
          unique: true,
          trim: true,
        },
        password: {
          type: String,
          required: true,
          trim: true,
        },
        role: {
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

    this.schema.methods.encryptPassword = async (
      password: string
    ): Promise<string> => {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      return hash;
    };

    this.schema.methods.matchPassword = async function (
      password: string,
      recPassword: string
    ): Promise<boolean> {
      return await bcrypt.compare(password, recPassword);
    };
  }

  public getModel() {
    const Usuario = model<IUsuario>("Usuario", this.schema);
    return Usuario;
  }
}
export const usuarioSchema = new UsuarioSchema();
export const UsuarioModel = new UsuarioSchema().getModel();
export default UsuarioSchema;
