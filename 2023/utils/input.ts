import * as fs from 'fs';
import * as path from "path";

export const getInput = (day: number): string => {
    return getInputContent(getInputFolder(day) + "/input");
}

export const getTestInput = (day: number, part: number): string => {
    return getInputContent(getInputFolder(day) + `/part_${part}.test`);
}

const getInputFolder = (day: number): string => {
    const folderName = String(day).padStart(2, "0");
    return path.resolve(__dirname, `../inputs/${folderName}`);
}

const getInputContent = (folder: string): string => {
    return fs.readFileSync(path.resolve(folder), "utf-8").trim();
}
