---
tag: KRHQ5YEQ0C
kind: problem
type: answer
answer: 1, 2, 3, \ldots, n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an $n \times n$ array of numbers $a_{ij}$ (standard notation). Suppose each row consists of the $n$ numbers $1,2,\ldots n$ in some order and $a_{ij} = a_{ji}$ for $i , j = 1,2, \ldots n$. If $n$ is odd, prove that the numbers $a_{11}, a_{22} , \ldots a_{nn}$ are $1,2,3, \ldots n$ in some order.
