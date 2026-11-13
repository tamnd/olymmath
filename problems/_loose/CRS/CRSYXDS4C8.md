---
tag: CRSYXDS4C8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207193
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$ and $I = \{1, 2,..., k\}$ with $k$ is a positive integer.
Given positive integers $a_1, a_2, ..., a_k$ such that for all $i \in I$: $1 \le a_i \le n$ and $$\sum_{i=1}^k a_i \ge 2(n!).$$
Show that there exists $J \subseteq I$ such that $$n! + 1 \ge \sum_{j \in J}a_j >\sqrt {n! + (n - 1)n}$$
