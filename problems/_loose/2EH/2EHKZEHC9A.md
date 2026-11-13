---
tag: 2EHKZEHC9A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250775
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \ge 2$, determine the number of ordered $n$-tuples of integers $(a_1, a_2,...,a_n)$ such that
(a) $a_1 + a_2 + .. + a_n \ge n^2$ and
(b) $a_1^2 + a_2^2 + ... + a_n^2 \le n^3 + 1$
