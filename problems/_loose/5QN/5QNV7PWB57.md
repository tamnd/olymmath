---
tag: 5QNV7PWB57
kind: problem
type: answer
answer: c > 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $c$ be a positive real number. Alice wishes to pick an integer $n$ and a sequence $a_1$, $a_2$, $\ldots$ of distinct positive integers such that $a_{i} \leq ci$ for all positive integers $i$ and $$n, n + a_1, n + a_1 - a_2, n + a_1 - a_2 + a_3, \cdots$$ is a sequence of distinct nonnegative numbers. Find all $c$ such that Alice can fulfil her wish.
