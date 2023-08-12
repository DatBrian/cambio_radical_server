import { generateToken } from "../common/FunctionsCommon";
import { UsuarioModel } from "../model/UsuarioModel";
import AuthRepository, { authRepository } from "../repositories/AuthRepository";

class AuthServices {
  private repository: AuthRepository;

  constructor() {
    this.repository = authRepository;
  }

  public async signUp(body: any) {
    const errors = [];
    const password = body.password;
    const username = await UsuarioModel.findOne({ username: body.username });

    if (password.length < 5) {
      errors.push({
        text: "La contraseña debe tener un mínimo de 5 caracteres",
      });
    }
    if (username) {
      errors.push({ text: "El usuario ya está en uso" });
    }
    if (errors.length > 0) {
      return errors;
    } else {
      const encryptedPassword =
        await UsuarioModel.schema.methods.encryptPassword(password);
      body.password = await encryptedPassword;
      const newUser = await this.repository.signUp(body);
      return newUser;
    }
  }

  public async signIn(body: any) {
    const errors = [];
    const user: any = await this.repository.signIn(body);
    
    if (!user) {
      errors.push({ text: "Usuario no encontrado :(" });
    }else{
      const matchPassword = await UsuarioModel.schema.methods.matchPassword(
        body.password,
        user.password
      );
      if (!matchPassword) {
        errors.push({ text: "Contraseña incorrecta :(" });
      }
    }

    if (errors.length > 0) {
      
      return errors;
    } else {
      const token = await generateToken({ id: user._id });
      const response = {
        token: token,
        role: user.role
      };
      return response;
    }
  }
}

export default AuthServices;
export const authServices = new AuthServices();
