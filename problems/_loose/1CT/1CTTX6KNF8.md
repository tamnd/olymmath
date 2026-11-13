---
tag: 1CTTX6KNF8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence with positive terms

$$
a_{1}=1, a_{n}=\frac{a_{n}^{2}+a_{n+1}^{2}}{(n-1)^{2} a_{n}+2 a_{n+1}}
$$

Prove that

$$
a_{n} \leq\left(\frac{n}{2}\right)^{n-1}
$$