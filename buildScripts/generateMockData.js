import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

jsf.extend('faker', () => require('faker'));
const json = JSON.stringify(jsf.generate(schema));

fs.writeFile('./src/api/db.json',json,function (err) {
  if (err){
    console.log(chalk.red(err)); // eslint-disable-line no-console
  } else {
    console.log(chalk.green("Mock data generated.")); // eslint-disable-line no-console
  }
});