import { readFile as fsReadFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const readFile = async (type: "input"|"example", day: number) =>  {
    const date = String(day).padStart(1, "0");

    const file = await fsReadFile(resolve(__dirname, `./${type}s/${date}.txt`));
    return file.toString("utf-8");
}

