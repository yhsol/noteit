import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { email = "", username = "", firstName, lastName, bio } = args;
      const user = await prisma.createUser({
        email,
        username,
        firstName,
        lastName,
        bio
      });
      return user;
    }
  }
};
