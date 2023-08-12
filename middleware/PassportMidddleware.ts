import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { UsuarioModel } from "../model/UsuarioModel";

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      const user = await UsuarioModel.findOne({ username: username });

      if (user) {
        return done(null, false, { message: "Ya existe ese username" });
      } else {
        const newUser = new UsuarioModel();
        const body = req.body;
        newUser.username = username;
        newUser.password = newUser.schema.methods.encryptPassword(password);
        newUser.role = body.role;
        await newUser.save();
        done(null, newUser);
      }
    }
  )
);

passport.use(
  "signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (_req, username, password, done) => {
      try {
        const user = await UsuarioModel.findOne({ username });
        if (!user) {
          return done(null, false, { message: "Usuario no encontrado" });
        }

        const isPasswordMatch = await user.schema.methods.matchPassword(
          password
        );
        if (isPasswordMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Contraseña incorrecta" });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UsuarioModel.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});