# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Setup Docker
- GitHub Actions build, test and code analysis

## [0.1.0]

### Added

- Setup webpack
- Babel
- Code Style formatter with Prettier
- Linter with ESLint
- Setup Tests with Jest
- project development dependencies
- npm scripts
  - `start` - Run the CLI
  - `build` - Build the application with build script in production
  - `build:analyzer` - Open the webpack analyzer tool for package
  - `dev` - Run in watch mode
  - `lint` - Lint the codebase
  - `typecheck` - Typecheck typescript files
  - `format` - Run prettier to format the code styles
  - `format:check` - Check code if they are correctly formatted
  - `prettier` - Base script to `format` and `format:check`
  - `test` - Run tests
  - `test:watch` - Run ests in watch mode
  - `prepare` - Build and install husky when is not Continuous Integration

[unreleased]: https://github.com/pherval/cli-boilerplate/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/pherval/cli-boilerplate/releases/tag/v0.1.0
