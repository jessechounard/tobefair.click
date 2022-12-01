import { dotenv } from "./deps.ts";

export type Config = {
  appPort: number;
  //  dbConnectionString: string;
};

const getVar = (
  varName: string,
  dotenvConfig: dotenv.DotenvConfig,
  defaultValue = ""
): string => {
  return dotenvConfig[varName] ?? Deno.env.get(varName) ?? defaultValue;
};

export const getConfig = async (): Promise<Config> => {
  const dotenvConfig = await dotenv.config();

  return {
    appPort: parseInt(getVar("APP_PORT", dotenvConfig, "8000")),
    //    dbConnectionString: getVar("DB_CONN_STRING", dotenvConfig, ""),
  };
};
