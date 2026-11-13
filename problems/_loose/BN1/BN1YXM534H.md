---
tag: BN1YXM534H
kind: problem
type: answer
answer: 2n - 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Mariano divides a rectangle into $n^2$ smaller rectangles by drawing $n-1$ vertical lines and $n-1$ horizontal lines, parallel to the sides of the larger rectangle. On every step, Emilio picks one of the smaller rectangles and Mariano tells him its area. Find the least positive integer $k$ for which it is possible that Emilio can do $k$ conveniently thought steps in such a way that with the received information, he can determine the area of each one of the $n^2$ smaller rectangles.
