---
tag: 1JGQN18DRT
kind: problem
type: answer
answer: k=2, k=3, k=4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220972
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all positive integers $k \geq 2$ for which there exists some positive integer $n$ such that the last $k$ digits of the decimal representation of $10^{10^n} - 9^{9^n}$ are the same.

*Proposed by Andrew Wen*
