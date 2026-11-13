---
tag: P8YQ2FNEXG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initally a pair $(x, y)$ is written on the board, such that exactly one of it's coordinates is odd. On such a pair we perform an operation to get pair $(\frac x 2, y+\frac x 2)$ if $2|x$ and $(x+\frac y 2, \frac y 2)$ if $2|y$. Prove that for every odd $n>1$ there is a even positive integer $b<n$ such that starting from the pair $(n, b)$ we will get the pair $(b, n)$ after finitely many operations.
