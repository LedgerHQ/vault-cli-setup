import { exec } from '@actions/exec'
import { getBooleanInput, getInput, setFailed } from '@actions/core'

const PACKAGE_MANAGER = getInput('package_manager')
const VAULT_CLI_VERSION = getInput('vault_cli_version')
const SUDO = getBooleanInput('with_sudo') ? 'sudo' : ''

async function run() {
	try {
		switch (PACKAGE_MANAGER) {
			case 'npm':
				console.info('INSTALLING LEDGER VAULT CLI VIA NPM')
				await exec(
					`${SUDO} npm install --unsafe-perm -g @ledgerhq/vault-cli@${VAULT_CLI_VERSION} --loglevel=error`
				)
				break
			case 'yarn':
				console.info('INSTALLING LEDGER VAULT CLI VIA YARN')
				await exec(`${SUDO} yarn global add @ledgerhq/vault-cli@${VAULT_CLI_VERSION}`)
				break
		}
	} catch (err) {
		setFailed(err.message)
	}
}

run()
