import { isAuthenticated } from "../../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeFeed: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const following = await prisma.user({ id: user.id }).following();
      console.log(following);
      if (following) {
        //   show following feed
      } else {
        //  show sort feed(like recent, like, view, comment)
      }
    }
  }
};
