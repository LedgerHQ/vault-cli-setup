import * as core from "@actions/core";
import * as exec from "@actions/exec";

const PACKAGE_MANAGER = core.getInput("package-manager");
const VAULT_CLI_VERSION = core.getInput("version");

async function run() {
  console.log(`INSTALLING LEDGER VAULT CLI`);

  try {
    switch (PACKAGE_MANAGER) {
      case "npm":
        await exec.exec(
          `sudo npm install -g @ledgerhq/vault-cli@${VAULT_CLI_VERSION} --loglevel=error`
        );
        break;
      case "yarn":
        await exec.exec(
          `sudo yarn global add @ledgerhq/vault-cli@${VAULT_CLI_VERSION}`
        );
        break;
    }
  } catch (err) {
    core.setFailed(err.message);
  }

  console.log(`LEDGER VAULT CLI INSTALLED SUCCESSFULLY`);
}

run();