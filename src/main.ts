import { getConfig } from "./config.ts";
import { pogo } from "./deps.ts";
import { actorRequest, webfingerHandler } from "./handlers.ts";

type webfinger = {
  n: number;
};

const main = async () => {
  const config = await getConfig();

  const server = pogo.server({
    port: config.appPort,
    catchAll: (request, h) => {
      console.log(request.url);
      return "";
    },
  });

  server.router.get("/", () => {
    return "Hello, world!";
  });

  server.router.get("/.well-known/webfinger", (request, h) => {
    return webfingerHandler(request, h);
  });

  server.router.get("/actors/{actor}", (request, h) => {
    return actorRequest(request, h);
  });

  server.start();
};

if (import.meta.main) {
  await main();
}
