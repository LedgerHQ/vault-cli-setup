import * as core from "@actions/core";
import { exec } from "@actions/exec";

const PACKAGE_MANAGER = core.getInput("package_manager");
const VAULT_CLI_VERSION = core.getInput("vault_cli_version");
const SUDO = core.getBooleanInput("with_sudo") ? "sudo" : "";

async function run() {
  console.log(`INSTALLING LEDGER VAULT CLI`);

  try {
    switch (PACKAGE_MANAGER) {
      case "npm":
        await exec(
          `${SUDO} npm install --unsafe-perm -g @ledgerhq/vault-cli@${VAULT_CLI_VERSION} --loglevel=error`
        );
        break;
      case "yarn":
        await exec(
          `${SUDO} yarn global add @ledgerhq/vault-cli@${VAULT_CLI_VERSION}`
        );
        break;
    }
  } catch (err) {
    core.setFailed(err.message);
  }

}

run();
