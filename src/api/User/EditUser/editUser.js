import { isAuthenticated } from "../../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Mutation: {
    editUser: (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { email, username, firstName, lastName, bio, avatar } = args;
      return prisma.updateUser({
        where: { id: user.id },
        data: { email, username, firstName, lastName, bio, avatar }
      });
    }
  }
};
