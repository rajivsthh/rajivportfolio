---
title: SAFE-T1006 — User Social‑Engineering Install
version: 1.0
date: 2025-12-24
author: rajivsthh
---

# SAFE-T1006 — User Social‑Engineering Install

TL;DR: Attackers use social engineering (phishing, typosquatting, malicious installers) to trick users or developers into installing trojanized packages or agents. Post-install behavior often includes registration of agents, persistence, and C2 communication.

## Overview

- Tactic: Initial Access / Execution (user-assisted)
- Severity: High — potential for attacker-controlled code execution or persistent agent presence

## Description

SAFE-T1006 covers techniques where adversaries convince a user (developer, operator, or admin) to install a malicious component. Delivery methods include phishing with malicious links or attachments, typosquatting in package registries (e.g., npm, PyPI), maligned installers bundled with legitimate software, and compromise of dependent repositories or CI pipelines.

Common post-install activities include agent registration, persistence (service/cron), credential harvesting, and network beaconing.

## Attack Steps

1. Prepare: Build a trojanized package or installer containing a post-install payload (agent, backdoor, or registration routine).
2. Deliver: Distribute via phishing, typosquatting, malicious binaries, or compromised repositories.
3. Install: Victim installs the package/installer believing it to be legitimate.
4. Execute: Post-install routines register agents, start services, or create persistence mechanisms.
5. Operate: Agent beacons to C2, exfiltrates data, or moves laterally.

## Detection Guidance

- Monitor package install events and new service/agent registrations.
- Detect unusual package names (typosquatting) and recently published packages with low trust signals.
- Monitor for new runtime services, cron entries, or unexpected binaries created after installs.
- Watch for anomalous outbound connections from newly installed components.

***Example detection artifacts*** (example only — tune to your environment): `docs/detections/SAFE-T1006-sigma.yml` contains a Sigma-style rule for suspicious installer artifacts.

## Mitigations

- Package provenance: verify package signatures and provenance before installing.
- Use allowlists / approved registries and restrict direct installs in production CI/CD.
- Enforce code review and scanning for packages used in build pipelines.
- Monitor and restrict execution of newly installed binaries and services.

## Response Recommendations

- Immediately isolate systems where suspicious installs occurred.
- Record and preserve installation artifacts for forensic analysis.
- Revoke affected credentials and rotate secrets if exfiltration is suspected.
- Patch CI/CD and repository workflows to prevent reintroduction.

## What's included in this repo

- `docs/SAFE-T1006.md` — this technique writeup.
- `docs/detections/SAFE-T1006-sigma.yml` — example Sigma-style detection rule.

## Next steps (suggested)

- Convert the writeup to a short blog post for broader audience reach.
- Expand detection rules into OSQuery, YARA, or pre-commit hooks for CI.
- Create a short incident response playbook detailing triage and containment steps.
