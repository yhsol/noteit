import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    searchTag: async (_, args) =>
      prisma.tags({ where: { text_contains: args.term } })
  }
};
