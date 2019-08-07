import { isAuthenticated } from "../../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

// TODO: files 들은 어떻게 올려야되지?

export default {
  Mutation: {
    uploadPost: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { text, title, tags, location } = args;
      const postContent = await prisma.createPost({
        user: {
          connect: {
            id: user.id
          }
        },
        text,
        title,
        location,
        files,
        tags
      });
      return postContent;
    }
  }
};
