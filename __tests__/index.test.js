
import { getAst, getDiff } from '../src';

describe('It works', () => {
  it('function getAst', () => {
    const first = '__tests__/__fixtures__/first.json';
    const second = '__tests__/__fixtures__/second.json';
    expect(getAst(first, second)).toEqual([
      { name: 'host', before: 'hexlet.io', after: 'hexlet.io' },
      { name: 'timeout', before: 50, after: 20 },
      { name: 'proxy', before: '123.234.53.22', after: undefined },
      { name: 'follow', before: false, after: undefined },
      { name: 'verbose', before: undefined, after: true },
    ]);
  });
  it('function getDiff', () => {
    const first = '__tests__/__fixtures__/first.json';
    const second = '__tests__/__fixtures__/second.json';
    const ast = getAst(first, second);
    expect(getDiff(ast)).toEqual('host: hexlet.io\n- timeout: 50\n+ timeout: 20\n- proxy: 123.234.53.22\n- follow: false\n+ verbose: true\n');
  });
});