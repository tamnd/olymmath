---
tag: TW17NVVT8Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You have $n$ balls, each with a number. Together, the balls contain exactly the numbers 1 to $n$. You must distribute the balls into two boxes. The value of the box is obtained by adding up all the numbers of the balls in that box. The distribution must meet the following rules:

- Each box must contain at least one ball.
- The two boxes must not contain the same number of balls.
- The value of the box with the fewest balls must be at least 2 greater than the value of the box with the most balls.

Determine for which positive integers $n$ this is possible.

(Prove that it is indeed possible for those numbers $n$ and that it is not possible for other numbers $n$.)
