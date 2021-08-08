import jwt from "jsonwebtoken";
//Generate Token
export async function generateToken(_id) {
  const token = await jwt.sign(
    {
      _id,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" },
  );
  return token;
}
//Verfiy Token
export async function verifyToken(token) {
  try {
    const verify = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!verify) {
      new Error("");
    }
    return { _id: verify["_id"] };
  } catch (e) {
    new Error("Need Authentication");
  }
}
