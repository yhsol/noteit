import { prisma } from "../../../../generated/prisma-client";

// TODO: search priority

export default {
  Query: {
    searchPost: async (_, args) =>
      prisma.posts({
        where: {
          OR: [{ title_contains: args.term }, { text_contains: args.term }]
        }
      })
  }
};
