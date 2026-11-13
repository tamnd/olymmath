---
tag: P0CDH0MP60
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,..., a_n$ be positive reals and let $x_1, ... , x_n$ be real numbers such that $a_1x_1 +...+ a_nx_n = 0$. Prove that
$$\sum_{1\le i<j \le n} x_ix_j |a_i - a_j | \le 0.$$ When does the equality take place?
