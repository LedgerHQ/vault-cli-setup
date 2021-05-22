const { execSync } = require("child_process");
const core = require("@actions/core");

console.log(`REMOVE LEDGER VAULT CLI`);

const PACKAGE_MANAGER = core.getInput("package-manager");

async function run() {
  switch (PACKAGE_MANAGER) {
    case "npm":
      execSync(`npm uninstall -g @ledgerhq/vault-cli`, { stdio: "inherit" });
      break;
    case "yarn":
      execSync(`yarn global remove @ledgerhq/vault-cli`, { stdio: "inherit" });
      break;
    default:
      throw new Error(`Sorry, we are out of ${PACKAGE_MANAGER}.`);
  }
}

run();
