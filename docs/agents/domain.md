# Domain Docs

This is a single-context repository.

## Before exploring

- Read `CONTEXT.md` at the repository root when it exists.
- Read relevant decisions under `docs/adr/` when they exist.
- If either location is absent, proceed silently.

## Vocabulary

Use terms exactly as defined in `CONTEXT.md`. Do not introduce synonyms for
terms the glossary explicitly distinguishes or avoids.

If a needed concept is missing, reconsider whether the concept belongs in the
project vocabulary or record the gap for a later domain-modeling pass.

## Architecture decisions

If proposed work conflicts with an existing ADR, surface the conflict instead
of silently overriding it.

## Layout

```text
/
├── CONTEXT.md
├── docs/
│   └── adr/
└── src/
```
