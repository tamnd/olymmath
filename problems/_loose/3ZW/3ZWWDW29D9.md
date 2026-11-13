---
tag: 3ZWWDW29D9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204997
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a polynomial with integer coefficents$$P(x)=x^n+a_{n-1}x^{n-1}+...+a_1x+a_0,n\ge 1$$satisfying these conditions:
i) $|a_0|$ is not a perfect square.
ii) $P(x)$ is irreducible in $\mathbb{Q}[x].$

Prove that: $P(x^2)$ is irreducible in $\mathbb{Q}[x].$
