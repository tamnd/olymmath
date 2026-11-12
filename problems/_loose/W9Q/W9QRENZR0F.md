---
tag: W9QRENZR0F
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9869
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A permutation of the numbers $1,2,3, \ldots, n$ in some order is called funny if each number, starting from the second from the left, is either greater than all the numbers to its left or less than all the numbers to its left. For example, the permutation 3,2,1,4,5,6 is funny, while the permutation 3,1,2,4,5,6 is not. Find the number of all different funny permutations of the numbers $1,2,3, \ldots, n$.
