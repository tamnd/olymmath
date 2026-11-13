---
tag: DYSSMBP1FW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$ satisfies:
$$
a_{n+1}=\frac{a_{n}}{a_{n}^{3}+1}, a_{1}=1 \text {. }
$$

Prove: $a_{n}>\frac{1}{\sqrt[3]{3 n+\ln n+\frac{14}{9}}}$.
