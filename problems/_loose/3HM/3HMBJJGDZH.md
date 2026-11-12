---
tag: 3HMBJJGDZH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41020
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two Sums. Can you arrange the digits $1,2,3$, $4,5,7,8,9$ into two groups of four digits each so that the sums of the numbers formed by the digits in each group are equal to each other?

It is very easy to get the answer by replacing 9 with 6. For example, the sum of the numbers in each of the two groups of digits $1,2,7,8$ and $3,4,5,6$ is 18. But such a substitution is not allowed.
