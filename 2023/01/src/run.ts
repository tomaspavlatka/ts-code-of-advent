import * as fs from 'fs';
import { p1 } from './p1';

console.log('P1: ' + p1(fs.readFileSync('./data/input', 'utf-8')));
