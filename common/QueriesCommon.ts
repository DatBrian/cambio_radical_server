import { Model, Document } from "mongoose";
import { LeanDocument } from "mongoose";
import { ConnectionDB } from "../db/ConnectionDB";

abstract class QueriesCommon<ModelType extends Document> {
  protected model: any;
  private connection: ConnectionDB;

  constructor(model: Model<ModelType>) {
    this.model = model;
    this.connection = new ConnectionDB();
  }

  protected async getAllPaginate(
    pages: any = 1
  ): Promise<LeanDocument<ModelType>[]> {
    try {
      const page = parseInt(pages);
      await this.connection.connect();
      const query = await this.model.paginate(
        {},
        {
          limit: 20,
          page,
        }
      );
      return query;
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async getFilteredPaginate(
    pages: any = 1,
    querys: any
  ): Promise<LeanDocument<ModelType>[]> {
    try {
      const page = parseInt(pages);
      await this.connection.connect();
      const query = await this.model.paginate(
        querys ,
        {
          limit: 20,
          page,
        }
      );

      return query;
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async getAll(): Promise<LeanDocument<ModelType>[]> {
    try {
      await this.connection.connect();
      return await this.model.find();
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async getOneById(id: number): Promise<any> {
    try {
      const query = this.model.findById(id);
      const doc: any = await query.exec();
      return doc;
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async insert(doc: ModelType): Promise<string> {
    try {
      await this.connection.connect();
      await this.model.create(doc);
      return "Insertado correctamente :D";
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async put(id: number, doc: ModelType): Promise<string> {
    try {
      const updates: Partial<ModelType> = doc;
      await this.model.findByIdAndUpdate(id, updates);
      return "Actualizado correctamente :D";
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }

  protected async delete(id: number): Promise<string> {
    try {
      await this.model.findByIdAndDelete(id);
      return `${this.model.collection.name} eliminado correctamente :D`;
    } catch (error) {
      console.error("Error executing query:", error);
      throw new Error("Error executing query");
    }
  }
}

export default QueriesCommon;
