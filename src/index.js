import fs from 'fs';
import path from 'path';
import parse from './parsing';
import render from './render';
import buildAst from './buildAst';

export default (firstPath, secondPath) => {
  const beforeExtention = path.extname(firstPath);
  const afterExtension = path.extname(secondPath);
  const beforeStr = fs.readFileSync(firstPath, 'utf-8');
  const afterStr = fs.readFileSync(secondPath, 'utf-8');
  const before = parse(beforeStr, beforeExtention);
  const after = parse(afterStr, afterExtension);
  const ast = buildAst(before, after);
  return render(ast);
};

