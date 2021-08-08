import { verifyToken, generateToken } from "../utils/tokensUtilis.mjs";

const resolvers = {
  Query: {
    async getTodos(parventValue, args, context, info) {
      try {
        const { _id } = await verifyToken(context.token);
        console.log(_id);
        return [
          { name: "learn graphql", completed: false },
          { name: "learn nodejs", completed: false },
        ];
      } catch (e) {
        throw new Error("Please Authenticate");
      }
    },
  },
  Mutation: {
    async signUp(_, { input }, context, __) {
      let user = {
        ...input,
        _id: "shfghrghrfqn134214",
      };
      const token = await generateToken(user["_id"]);
      user["token"] = token;
      return { name: user["name"], id: user["_id"], token };
    },
  },
};
export default resolvers;
