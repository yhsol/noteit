import { isAuthenticated } from "../../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFeed: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const following = await prisma.user({ id: user.id }).following();
    }
  }
};
