---
tag: 200BNTGJMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54803
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $a_1, a_2, \ldots, a_{2000}$ of real numbers such that for any natural number $n, 1 \leq n \leq 2000$, the following equality holds:

$$
a_1^3 + a_2^3 + \ldots + a_n^3 = \left(a_1 + a_2 + \ldots + a_n\right)^2
$$

Prove that all terms of this sequence are integers.
