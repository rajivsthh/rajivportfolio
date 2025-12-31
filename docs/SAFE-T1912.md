---
title: SAFE-T1912 — Stego Response Exfiltration
version: 1.0
date: 2025-11-26
author: rajivsthh
---

# SAFE-T1912 — Stego Response Exfiltration

TL;DR: Attackers hide covert payloads inside AI/MCP responses (code blocks, JSON, or markdown) using techniques such as zero-width Unicode or encoded blobs. When copied into downstream systems (IDEs, CI, consoles), these payloads can be decoded or executed, enabling stealthy exfiltration.

## Overview

- Tactic: Exfiltration (ATK-TA0010)
- Severity: High

## Description

Stego Response Exfiltration leverages structured model outputs (code blocks, JSON, or markup) as a carrier for hidden data. The payloads are typically low-visibility (zero-width Unicode, hidden fields, or high-entropy encoded blobs) and rely on user actions (copy/paste, commit, or upload) to propagate into target systems where they are decoded or executed.

This technique is especially effective against workflows that trust machine-generated outputs without additional sanitation or schema validation.

## Attack Vectors

- Primary: Hidden payloads embedded directly in LLM/MCP response code blocks or structured outputs.
- Secondary: Zero-width character encoding (U+200B, U+200C, U+2060), hidden JSON fields, comments, or unexpected configuration keys.

## Technical Preconditions

- Attacker can influence or prime the model to include adversarial content in its responses.
- A user copies or transfers the model output into another environment (IDE, CI, cloud console) without sanitization.

## Attack Flow

```mermaid
flowchart TD
  A[Attacker identifies output channel] --> B[Prepare hidden payload]
  B --> C[Prime model to produce predictable structure (code/JSON)]
  C --> D[Inject hidden payload into model response]
  D --> E[Model outputs response with embedded payload]
  E --> F[User copies/pastes the output into a target system]
  F --> G[Payload propagates to attacker or triggers decoding]
  G --> H[Attacker extracts data or achieves persistence]
  classDef phase fill:#1f2937,stroke:#ffffff,color:#ffffff,border-radius:6px;
  class A,B,C,D,E,F,G,H phase;
```

## Detection Indicators

- Presence of zero-width Unicode characters (U+200B, U+200C, U+2060) in otherwise plain text.
- Large base64/hex blobs in configuration-like responses where they are unexpected.
- Abnormally large or deeply nested code blocks unrelated to the request.

Example (Sigma-style selection):

```yaml
title: Stego Payload Embedded in MCP Responses (example)
id: 7b29c1c4-9730-4e13-9ef0-52e48cbb2c61
status: experimental
description: Detects possible zero-width characters or encoded blobs in MCP responses.
author: rajivsthh
date: 2025-11-26
logsource:
  product: mcp
  service: response
detection:
  selection:
    response.text|re:
      - '\\u200b'
      - '\\u200c'
      - '^[A-Za-z0-9+/]{20,}={0,2}$'
  condition: selection
falsepositives:
  - Legitimate encoded configuration values
  - Tools that intentionally embed base64
level: high
```

## Mitigations

- Sanitize model outputs: remove or normalize zero-width characters and unexpected control characters.
- Enforce strict schema validation for generated structured outputs (reject unknown fields).
- Entropy scanning to flag unusually high-entropy text inside code or config blocks.
- Log and monitor user copy/paste actions when policy allows (telemetry for investigations).

## Response & Remediation

- Halt workflows that consumed suspicious outputs and sanitize all recent model responses.
- Review recent commits and CI artifacts for hidden payloads.
- Patch sanitization and validation modules and add regression tests to prevent reintroduction.

## Related Techniques

- SAFE-T1006 — User Social‑Engineering Install
- SAFE-T1704 — Compromised‑Server Pivot

## References

- Model Context Protocol Specification: https://modelcontextprotocol.io/specification
- OWASP Top 10 for LLM Applications: https://owasp.org/www-project-top-10-for-large-language-model-applications/

## Version History

| Version | Date       | Changes               | Author    |
|--------:|------------|-----------------------|-----------|
| 1.0     | 2025-11-26 | Initial documentation | rajivsthh |

