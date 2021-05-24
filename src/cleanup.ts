import { exec } from "@actions/exec";
import * as core from "@actions/core";

const PACKAGE_MANAGER = core.getInput("package_manager");
const SUDO = core.getBooleanInput("with_sudo") ? "sudo" : "";

async function run() {
  console.log(`REMOVE LEDGER VAULT CLI`);

  try {
    switch (PACKAGE_MANAGER) {
      case "npm":
        await exec(`${SUDO} npm uninstall -g @ledgerhq/vault-cli`);
        break;
      case "yarn":
        await exec(`${SUDO} yarn global remove @ledgerhq/vault-cli`);
        break;
    }
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
