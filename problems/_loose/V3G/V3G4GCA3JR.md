---
tag: V3G4GCA3JR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269204
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{a_n\}^\infty_{n=0}$ be the sequence of integers such that $a_0=1$, $a_1=1$, $a_{n+2}=2a_{n+1}-2a_n$. Decide whether
$$a_n=\sum_{k=0}^{\left\lfloor\frac n2\right\rfloor}\binom n{2k}(-1)^k.$$
