---
tag: 4CTRWKNNQ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242511
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $a_1,a_2,...,a_{2007}$ where $a_i \in\{2,3\}$ for $i = 1,2,...,2007$ and an integer sequence $x_1,x_2,...,x_{2007}$ satisfies the following: $a_ix_i + x_{i+2 }\equiv 0$ ($mod 5$) , where the indices are taken modulo $2007$. Prove that $x_1,x_2,...,x_{2007}$ are all multiples of $5$.
