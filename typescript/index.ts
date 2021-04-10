import { ieTest } from './ie-test';
import { readdirSync } from 'fs';

ieTest('Tom')('Jerry');

const files = readdirSync(__dirname);
files.forEach(console.log);
