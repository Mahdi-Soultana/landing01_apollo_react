import db from "../db/db.mjs";
function context({ req }) {
  const token = req.headers.authorization?.replace("Bearer ", "").trim();
  return { db, token };
}
export default context;
