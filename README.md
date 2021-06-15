# install-vault-cli-action

[![Test Install Vault CLI Action](https://github.com/LedgerHQ/vault-cli-setup/actions/workflows/main.yml/badge.svg)](https://github.com/LedgerHQ/vault-cli-setup/actions/workflows/main.yml)

This action provides the following functionality for GitHub Actions runners:

- Downloading and setting up a requested version of ***[Vault-CLI](https://www.npmjs.com/package/@ledgerhq/vault-cli)***

## Usage

Inputs `vault_cli_version`, `package_manager` and `with_sudo` are mandatory.
See list of available options:

```yaml
package_manager:
  description: 'Package manager for installation ["yarn", "npm"]'
  required: false
  default: 'yarn'
vault_cli_version:
  description: 'The Vault CLI version to install'
  required: false
  default: 'latest'
with_sudo:
  description: 'Install Vault CLI with sudo'
  required: false
  default: 'false'
```

### Basic examples

**Install with NPM**

```yaml
steps:
  - name: Install Vault-CLI
    uses: LedgerHQ/vault-cli-setup@v2
    with:
      package_manager: npm #optional
      vault_cli_version: 0.48.0 #optional
      with_sudo: true #optional
```

**Install with Yarn [ Yarn as default ]**

```yaml
steps:
  - name: Install Vault-CLI
    uses: LedgerHQ/vault-cli-setup@v2
    with:
      vault_cli_version: 0.48.0 #optional
```
