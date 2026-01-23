import { Config } from "@remotion/cli/config";
import path from "path";

Config.setPublicDir(path.join(process.cwd(), "public"));
Config.setEntryPoint("./remotion/index.ts");
