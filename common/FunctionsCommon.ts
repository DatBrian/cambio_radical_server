import { SignJWT } from "jose";

export async function generateToken(data: object) {
  try {
    const encoder = new TextEncoder();
    const jwt = await new SignJWT({ data })
      .setProtectedHeader({
        alg: "HS256",
        typ: "JWT",
      })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    return jwt;
  } catch (error) {
    console.error("Error al generar el token", error);
    throw error;
  }
}
