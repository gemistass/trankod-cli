#! /usr/bin/env node

import figlet from "figlet";
import { Command } from "commander";

//add the following line
const program = new Command();

program
  .version("1.0.0")
  .description("An example CLI for managing a directory")
  .option("-l, --ls  [value]", "List directory contents")
  .option("-m, --mkdir <value>", "Create a directory")
  .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

console.log(figlet.textSync("TRANKOD"));

const options = program.opts();

if (!process.argv.slice(2).length) {
  program.outputHelp();
  console.log(program.helpInformation());
}
