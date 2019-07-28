import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import { sendSecretMail } from "./utils";
import passport from "passport";
import "./passport";
import { authenticatJwt } from "./passport";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request })
});

server.express.use(logger("dev"));
server.express.use(authenticatJwt);

server.start({ port: PORT }, () =>
  console.log(`Server running on port http://localhost:${PORT}!`)
);
