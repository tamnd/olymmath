---
tag: FBK1FGT2BM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $L\left(a_{1}, a_{2}, \ldots, a_{k}\right)$ be the number of ways to place $a_{1}$ ones, $a_{2}$ twos, $\ldots, a_{k}$ numbers $k$ in the cells of an $m \times n$ table so that in each row the numbers increase from left to right in a non-strictly monotonic manner, and in each column the numbers increase from top to bottom in a strictly monotonic manner. Prove that the value of the function $L$ does not depend on the order of the arguments.
