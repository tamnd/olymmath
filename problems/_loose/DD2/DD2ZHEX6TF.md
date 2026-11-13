---
tag: DD2ZHEX6TF
kind: problem
type: answer
answer: \frac{1}{2} (AB + BC + CA)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $ABC$, the points $D$, $E$, and $F$ lie on the sides $BC$, $CA$, and $AB$, respectively, are such that
$$DC + CE = EA + AF = FB + BD.$$ Prove that $$DE + EF + FD \ge \frac12 (AB + BC + CA).$$
