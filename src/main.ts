import { getConfig } from "./config.ts";
import { pogo } from "./deps.ts";

const main = () => {
  const config = getConfig();

  const server = pogo.server({ port: config.appPort });

  server.router.get("/", () => {
    return "Hello, world!";
  });

  server.start();
};

if (import.meta.main) {
  main();
}