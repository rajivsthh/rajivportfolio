# SAFE-T1006 — User Social Engineering Install

Version: 1.0
Date: 2025-12-24
Author: rajivsthh

## Summary

SAFE-T1006 documents attacks that rely on social engineering to trick users or developers into installing trojanized MCP tools, dependencies, or installers. Typical delivery vectors include phishing emails, typosquatted packages, malicious installers bundled with legitimate software, and compromised third-party repositories.

This page follows the SAFE-MCP technique template and provides background, detection guidance, and suggested mitigations mapped to MCP-specific fields.

## Key points

- Tactic: Initial Access / Execution (user-assisted)
- Severity: High — attacker-controlled code execution or persistence
- Common vectors: phishing, typosquatting, compromised package repositories, malicious installers

## What's included in this PR

- `docs/SAFE-T1006.md` — this document (technique description, attack flow, examples).
- `docs/detections/SAFE-T1006-sigma.yml` — Sigma-style detection rule example targeting suspicious installer artifacts and unusual package names.
- Suggested mitigations and response steps tailored to MCP workflows (sanitization, provenance checks, package allowlists).

## Suggested usage

Use the detection example as a starting point for pipeline alerts. Adapt string-match and repo/package name lists to your environment to reduce false positives.

---

If you'd like, I can also:
- Add this technique as a blog post on the site (with full writeup and references).
- Expand detection rules into additional formats (OSQuery, Yara, or CI pre-commit hooks).
- Add an example incident-response playbook or checklist for triage.
