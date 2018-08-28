#!/usr/bin/env node

import program from 'commander';
import { findDiff } from '..';
import { version } from '../../package.json';

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    const result = findDiff(firstConfig, secondConfig);
    console.log(result);
  })
  .parse(process.argv);
