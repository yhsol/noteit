import { isAuthenticated } from "../../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

// TODO: files 들은 어떻게 올려야되지?

export default {
  Mutation: {
    uploadPost: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { text, title, tags, location, files } = args;
      const post = await prisma.createPost({
        user: {
          connect: {
            id: user.id
          }
        },
        text,
        title,
        location
      });
      files &&
        files.forEach(
          async file =>
            await prisma.createFile({
              url: file,
              post: {
                connect: {
                  id: post.id
                }
              }
            })
        );
      tags &&
        tags.forEach(
          async tag =>
            await prisma.createTag({
              text: tag,
              post: {
                connect: {
                  id: post.id
                }
              }
            })
        );
      return post;
    }
  }
};
