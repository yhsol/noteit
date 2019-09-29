import { isAuthenticated } from "../../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFeed: async (_, __, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      // console.log(user);
      const following = await prisma.user({ id: user.id }).following();
      return prisma.posts({
        where: {
          user: { id_in: [...following.map(user => user.id), user.id] }
        },
        orderBy: "createdAt_DESC"
      });
    }
  }
};
