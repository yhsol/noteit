import { isAuthenticated } from "../../../../middleware";
import { prisma } from "../../../../generated/prisma-client";

const EDIT = "EDIT";
const DELETE = "DELETE";

export default {
  Mutation: {
    editPost: async (_, args, { request }) => {
      isAuthenticated(request);
      const { user } = request;
      const { id, title, text, tags, location, action, files } = args;
      const post = await prisma.$exists.post({ id, user: { id: user.id } });
      if (post) {
        if (action === EDIT) {
          return prisma.updatePost({
            where: { id },
            data: {
              title,
              text,
              location
            }
          });
        } else if (action === DELETE) {
          return prisma.deletePost({ id });
        }
      } else {
        throw Error("You can't do that!");
      }
      tags.forEach(async tag => {
        await prisma.updateTag({
          text: tag,
          post: {
            connect: {
              id: post.id
            }
          }
        });
      });
    }
  }
};
