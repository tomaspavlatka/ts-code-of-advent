import * as fs from 'fs';
import { p1 } from './p1';
import { p2 } from './p2';

console.log('P1: ' + p1(fs.readFileSync('./data/input', 'utf-8')));
console.log('P2: ' + p2(fs.readFileSync('./data/input', 'utf-8')));
