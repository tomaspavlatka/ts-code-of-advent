import * as fs from 'fs';

const day = process.argv[2];
if (!day) {
    console.log("Please provide a day");
    process.exit(1);
}

const createInputFolder = (folder: string): string => {
    return createFolder(`./inputs/${folder}`);
}

const createSolutionFolder = (folder: string): string => {
    return createFolder(`./solutions/${folder}`);
}

const createInputFiles = (path: string): void => {
    ['input', 'part_1.test', 'part_2.test'].forEach(file => createFile(`${path}/${file}`, ''));
}

const createSolutionFiles = (path: string, day: string): void => {
    createFile(`${path}/part_1.ts`, fs.readFileSync('./solutions/template/part_1.ts', 'utf8').replace('__day__', day));
    createFile(`${path}/part_2.ts`, fs.readFileSync('./solutions/template/part_2.ts', 'utf8').replace('__day__', day));
}

const createFolder = (path: string): string => {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }

    return path;
}

const createFile = (path: string, content: string): void => {
    fs.writeFile(path, content, function (err) {
        if (err) throw err;
        console.log(`File ${path} is created successfully.`);
    });
}

const folder = day.padStart(2, "0");
const inputFolder = createInputFolder(folder);
createInputFiles(inputFolder);

const solutionFolder = createSolutionFolder(folder);
createSolutionFiles(solutionFolder, day);

