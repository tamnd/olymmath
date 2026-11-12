---
tag: WVTH05S5M0
kind: problem
type: answer
answer: n(k-1)+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given natural numbers $k$ and $n$, where 1 < $k$ < $n$. For what smallest $m$ is the following statement true: for any placement of $m$ rooks on an $n \times n$ board, one can select $k$ rooks from these $m$ such that no two of the selected rooks attack each other?
