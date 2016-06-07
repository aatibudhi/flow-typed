// @flow

import Git from "nodegit";

import {run as runValidateDefs} from "./validateDefs.js";
import {run as runTests} from "./runTests.js";

export const name = "run-ci-tests";
export const description = "Run continuous-integration validation tests";
export async function run(argv: {_: Array<string>}) {
  if (argv._.length !== 1) {
    throw new Error(
      'Please specify the path to the root of the git repo to run CI-tests on!'
    );
  }
  /*
  const [validateResult, testsResult] = await Promise.all([
    runValidateDefs(),
    runTests({_: []}),
  ]);
  return validateResult;
  */
  const repo  = await Git.Repository.open(argv._[0]);

  return 0;
};
