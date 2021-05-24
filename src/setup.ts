import * as core from "@actions/core";
import { execSync } from "child_process";

const PACKAGE_MANAGER = core.getInput("package-manager");
const VAULT_CLI_VERSION = core.getInput("version");

async function run() {
  console.log(`INSTALLING LEDGER VAULT CLI`);

  try {
    switch (PACKAGE_MANAGER) {
      case "npm":
        await execSync(
          `npm install --unsafe-perm -g @ledgerhq/vault-cli@${VAULT_CLI_VERSION} --loglevel=error`
        );
        break;
      case "yarn":
        await execSync(
          `yarn global add @ledgerhq/vault-cli@${VAULT_CLI_VERSION}`
        );
        break;
    }
  } catch (err) {
    core.setFailed(err.message);
  }

  console.log(`LEDGER VAULT CLI INSTALLED SUCCESSFULLY`);
}

run();
