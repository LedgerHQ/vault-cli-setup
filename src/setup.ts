import { execSync } from "child_process";
import * as core from "@actions/core";

console.log(`INSTALLING LEDGER VAULT CLI`);

const PACKAGE_MANAGER = core.getInput("package-manager");
const VAULT_CLI_VERSION = core.getInput("version");

async function run() {
  try {
    switch (PACKAGE_MANAGER) {
      case "npm":
        execSync(
          `sudo npm install --g @ledgerhq/vault-cli@${VAULT_CLI_VERSION} --loglevel=error`,
          { stdio: "inherit" }
        );
        break;
      case "yarn":
        execSync(
          `sudo yarn global add @ledgerhq/vault-cli@${VAULT_CLI_VERSION}`,
          { stdio: "inherit" }
        );
        break;
    }
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();

console.log(`LEDGER VAULT CLI INSTALLED SUCCESSFULLY`);
