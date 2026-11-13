---
tag: AMAA6AACY7
kind: problem
type: answer
answer: \binom{+4}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A square table filled with nonnegative (not necessarily distinct) integer numbers is said to be a magic square with sum $m$ if the sum of the numbers in each row and each column equals $m$. Prove that the number of magic squares $3 \times 3$ of sum $m$ such that the minimal element among the elements on the main diagonal lies in the centre is $\binom{m+4}{4}$.
