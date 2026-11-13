---
tag: KSJM5TJ993
kind: problem
type: answer
answer: S_{n}=(a_{1}-1)(2^{n}-1)+n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The first term of a sequence is $a_{1}>1$. Any subsequent term of the sequence can be obtained by subtracting one from twice the term that immediately precedes it. Write a formula for the sum of the first $n$ terms.
