import { isAuthenticated } from "../../../middlewares";
import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeRoom: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { id } = args;
      const canSeeRoom = await prisma.$exists.room({
        participants_some: { id: user.id }
      });
      if (canSeeRoom) {
        return prisma.room({ id });
      } else {
        throw Error("You did not Authenticated");
      }
    }
  }
};
