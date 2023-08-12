import { Schema, model } from "mongoose";
import { IBarrio } from "../interfaces/BarrioInterface";

class BarrioSchema {
  private schema: Schema<IBarrio>;

  constructor() {
    this.schema = new Schema<IBarrio>(
      {
        name: {
          type: String,
          required: true,
          unique: true,
          trim: true,
        },
        comuna: {
          type: Number,
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
    const Barrio = model<IBarrio>("Barrio", this.schema);
    return Barrio;
  }
}

export const BarrioModel = new BarrioSchema().getModel();
export default BarrioSchema;
