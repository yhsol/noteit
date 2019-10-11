import { prisma } from "../../../../generated/prisma-client";
import { isAuthenticated } from "../../../middlewares";

export default {
  Query: {
    me: async (_, __, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      return await prisma.user({ id: user.id });
    }
  }
};
