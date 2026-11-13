---
tag: AMB7TFMDAD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine if there exists pairwise distinct positive integers $a_1$, $a_2$,$ ...$, $a_{101}$, $b_1$, $b_2$,$ ...$, $b_{101}$ satisfying the following property: for each non-empty subset $S$ of $\{1, 2, ..., 101\}$ the sum $\sum_{i \in S} a_i$ divides $100! + \sum_{i \in S} b_i$.
