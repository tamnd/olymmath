---
tag: RPSSYSZYA6
kind: problem
type: answer
answer: '|x_{n}-\sqrt{2}|<\frac{1}{2^{2^{n}-1}}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for the numbers $\left\{x_{n}\right\}$ from problem $\underline{61297}$, the continued fraction expansions can be explicitly given as: $x_{n+1}=$

$[1 ; \underbrace{2, \ldots, 2}_{2^{n}-1}]$.

Estimate the difference $\left|x_{n}-\sqrt{2}\right|$.
