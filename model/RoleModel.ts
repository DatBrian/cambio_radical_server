import { Schema, model } from 'mongoose';
import { IRole } from '../interfaces/RoleInterface';

class RoleSchema {
  private schema: Schema<IRole>;

  constructor() {
    this.schema = new Schema<IRole>({
      name: {
        type: String,
        required: true,
        unique:true,
        trim: true
      }
    }, {
      versionKey: false
    });

    this.schema.set('toJSON', {
      transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
      }
    });
  }

  public getModel() {
    const Role = model<IRole>('Role', this.schema);
    return Role;
  }
}

export const RoleModel = new RoleSchema().getModel();
export default RoleSchema;