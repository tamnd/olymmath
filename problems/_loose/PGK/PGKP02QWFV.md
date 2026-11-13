---
tag: PGKP02QWFV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(x_n)_{n\in Z}$ and $(y_n)_{n\in Z}$ be two sequences of integers such that $|x_{n+2} - x_n| \le 2$ and $x_n + x_m = y_{n^2+m^2}$ for all $n, m \in Z$. Show that the sequence of $x_n$s takes at most $6$ distinct values.

(Paolo Leonetti)
