import QueriesCommon from "../common/QueriesCommon";
import { IUsuario } from "../interfaces/UsuarioInterface";
import { Model } from "mongoose";
import { UsuarioModel } from "../model/UsuarioModel";
import { generateToken } from "../common/FunctionsCommon";

class AuthRepository extends QueriesCommon<IUsuario> {
  constructor(protected model: Model<IUsuario> = UsuarioModel) {
    super(model);
  }

  public async signUp(body: any) {
    try {
      const inserted = await this.insert(body);
      const user: any = await UsuarioModel.findOne({ username: body.username });
      const data = { id: user._id };
      const token = await generateToken(data);
      const response = { status: inserted, token: token };
      return response;
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      throw new Error("Error al registrar el usuario");
    }
  }

  public async signIn(body: any) {
    try {
      const username = body.username;
      const user = await UsuarioModel.findOne({ username: username });
      return user;
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      throw error;
    }
  }
}

export default AuthRepository;
export const authRepository = new AuthRepository();
