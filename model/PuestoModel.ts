import { Schema, model } from "mongoose";
import { IPuesto } from "../interfaces/PuestoInterface";

class PuestoSchema {
  private schema: Schema<IPuesto>;

  constructor() {
    this.schema = new Schema<IPuesto>(
      {
        name: {
          type: String,
          required: true,
          unique: true,
          trim: true,
        },
        zona: {
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
    const Puesto = model<IPuesto>("Puesto", this.schema);
    return Puesto;
  }
}

export const PuestoModel = new PuestoSchema().getModel();
export default PuestoSchema;
