# Issue tracker: GitHub

Issues and PRDs for this repository live in GitHub Issues under
`azhan12138/personal_web`. Use the GitHub CLI for issue operations when an
authenticated local session is available.

## Conventions

- Create an issue with `gh issue create`.
- Read an issue and its discussion with `gh issue view <number> --comments`.
- List open work with `gh issue list --state open`.
- Comment with `gh issue comment <number>`.
- Apply or remove labels with `gh issue edit`.
- Close completed work with `gh issue close`.
- Infer the repository from the configured `origin` remote.

## Pull requests as a triage surface

PRs as a request surface: no.

## Publishing specifications

When a skill says “publish to the issue tracker,” create a GitHub issue.
Before publication, keep an exact reviewable draft under `docs/specs/`.
After publication, the local specification and issue body must describe the
same approved scope, decisions, and acceptance criteria.

## Fetching implementation tickets

When a skill says “fetch the relevant ticket,” read the corresponding GitHub
issue including its comments and labels.
