import { exec } from '@actions/exec'
import { getBooleanInput, getInput, setFailed } from '@actions/core'

const PACKAGE_MANAGER = getInput('package_manager')
const SUDO = getBooleanInput('with_sudo') ? 'sudo' : ''

async function run() {
	try {
		switch (PACKAGE_MANAGER) {
			case 'npm':
				console.log('REMOVE LEDGER VAULT CLI VIA NPM')
				await exec(`${SUDO} npm uninstall -g @ledgerhq/vault-cli`)
				break
			case 'yarn':
				console.log('REMOVE LEDGER VAULT CLI VIA YARN')
				await exec(`${SUDO} yarn global remove @ledgerhq/vault-cli`)
				break
		}
	} catch (err) {
		setFailed(err.message)
	}
}

run()
