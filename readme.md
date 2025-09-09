# macos-version-cli

> Get the macOS version of the current system. Example: `10.9.3`

## Install

```
$ npm install --global macos-version-cli
```

## Usage

```
$ macos-version --help

  Usage
    $ macos-version

  Options
    --is <semver-range>      Check if the macOS version matches the specified semver range
    --gte <version>          Check if the macOS version is greater than or equal to the specified version
    --assert <semver-range>  Assert that the macOS version matches the specified semver range
    --assert-gte <version>   Assert that the macOS version is greater than or equal to the specified version

  Examples
    $ macos-version
    14.0
    
    $ macos-version --is '>10.10'
    ✔ macOS version satisfies >10.10
    
    $ macos-version --gte 10.10
    ✔ macOS version is greater than or equal to 10.10
    
    $ macos-version --assert '>10.10'
    ✔ macOS version satisfies >10.10
    
    $ macos-version --assert-gte 10.10
    ✔ macOS version is greater than or equal to 10.10

  Exit codes
    0 - Success or condition is true
    1 - Condition is false or assertion failed
```

## Related

- [macos-version](https://github.com/sindresorhus/macos-version) - API for this module
