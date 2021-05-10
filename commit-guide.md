# Commit message guidelines

Having precise rules over how our Git commit messages must be formatted, leads to a _easier to read commit history_.
Each commit message should consist of a _header_, a _body_, and a _footer_.

## Format

```bash
<header>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The `header` is mandatory and should conform to the format below

### Commit Message Header

```bash
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|platform-webworker|
  │                          platform-webworker-dynamic|router|service-worker|upgrade|zone.js|
  │                          packaging|changelog|dev-infra|docs-infra|migrations|ngcc|ve
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|style|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.

#### Type

The type must be one of the following:

- 📦 _build_: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- 👷🏽‍♀️ _ci/cd_: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- 📖 _docs_: Documentation only changes
- 🎉 _feat_: A new feature
- 🐛 _fix_: A bug fix
- 🔥 _perf_: A code change that improves performance
- 👌🏾 _refactor_: A code change that neither fixes a bug nor adds a feature
- 💄 _style_: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- 🤖 _test_: Adding missing tests or correcting existing tests

#### Scope

The scope should be the name of the npm package affected. \*\*\*

#### Summary

Use the summary field to provide a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot(.) at the end

The `body` is mandatory for all commits. When the body is required it must be at least 20 characters long.

The `footer` is optional.

Any line of the commit message cannot be longer than 100 characters.

### Commit Message Body

Just as in the summary, use the imperative, present tense: "fix" not "fixed" nor "fixes".

Explain the motivation for the change in the commit message body. This commit message should explain why you are making the change. You can include a comparison of the previous behavior with the new behavior in order to illustrate the impact of the change.

### Commit Message Footer

The footer can contain information about breaking changes and is also the place to reference GitHub issues, Jira tickets, and other PRs that this commit closes or is related to.

```bash
BREAKING CHANGE: <breaking change summary>
<BLANK LINE>
<breaking change description + migration instructions>
<BLANK LINE>
<BLANK LINE>
Fixes #<issue number>
```

Breaking Change section should start with the phrase "BREAKING CHANGE:" followed by a summary of the breaking change, a blank line, and a detailed description of the breaking change that also includes migration instructions.

### Revert commits

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit.
The content of the commit message should contain:

- information about the SHA of the commit reverted in the following format: `This reverts commit <SHA>`,
- a clear description of the reason for reverting the commit message
