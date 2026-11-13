---
tag: R2TXN5TF7S
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest positive integer $n$, such that there exists a set with $n$ elements, where the set contains exactly 1 element divisible by $n$, exactly 2 elements divisible by $\mathrm{n}-1$, $\cdots$, exactly $\mathrm{n}-1$ elements divisible by 2, and $\mathrm{n}$ elements divisible by 1.
