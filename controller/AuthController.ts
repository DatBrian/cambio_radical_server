/* eslint-disable @typescript-eslint/no-unused-vars */
import AuthServices, { authServices } from "../services/AuthServices";
import { Request, Response } from "express";

export class AuthController {
  private readonly service: AuthServices;
  constructor() {
    this.service = authServices;
  }

  public signUp = async (req: Request, res: Response) => {
    const { username, password, role } = req.body;

    const response: any = await this.service.signUp({
      username,
      password,
      role,
    });

    res.json(response);
  };

  public signIn = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const data: any = await this.service.signIn({ username, password });

    if (data[0]) {
      res.json(data);
    } else {
      const response = {
        status: "Usuario encontrado :D",
        token: data.token,
        role: data.role,
      };

      res.json(response);
    }
  };

}
export default AuthController;
export const authController = new AuthController();
