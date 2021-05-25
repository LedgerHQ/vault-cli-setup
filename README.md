# install-vault-cli-action

[![Test Install Vault CLI Action](https://github.com/LedgerHQ/install-vault-cli-action/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/LedgerHQ/install-vault-cli-action/actions/workflows/main.yml)

This action provides the following functionality for GitHub Actions runners:
- Downloading and setting up a requested version of Vault-CLI

## Usage
Inputs `vault_cli_version`, `package_manager` and `with_sudo` are optional. 
See list of available options:
```yaml
  package_manager:
     description: 'Package manager for installation ["yarn", "npm"]'
     required: false
     default: "npm"
  vault_cli_version:
     description: "The Vault CLI version to install"
     required: false
     default: "latest"
  with_sudo:
     description: "Install Vault CLI with sudo"
     required: false
     default: "false"
```

### Basic examples
**Install with NPM**
```yaml
steps:
   - name: Install Vault-CLI
     uses: LedgerHQ/install-vault-cli-action@v1.5.0
     with:
        package_manager: npm #optional
        vault_cli_version: 0.48.0 #optional
        with_sudo: true #optional
```

**Install with YARN**
```yaml
steps:
   - name: Install Vault-CLI
     uses: LedgerHQ/install-vault-cli-action@v1.5.0
     with:
        package_manager: yarn #optional
        vault_cli_version: 0.48.0 #optional
```
