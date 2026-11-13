---
tag: GGNTZJHBM2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 5$ be an integer and let $x_1, x_2, ... , x_n$ be $n$ distinct integer numbers such that no $3$ of them can be in arithmetic progression. Prove that if for all $1 \le i, j \le n$ we have $$2|x_i - x_j | \le n(n - 1)$$ then there exist $4$ distinct indices $i, j, k, l \in \{1, 2, ... , n\}$ such that $$x_i + x_j = x_k + x_l.$$
