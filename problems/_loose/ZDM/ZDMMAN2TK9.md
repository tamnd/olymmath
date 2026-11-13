---
tag: ZDMMAN2TK9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Can a $6 \times 6$ square be cut into $1 \times 4$ rectangles? What is the necessary and sufficient condition for cutting an $m \times n$ rectangle into $1 \times k$ rectangles?

We will try to generalize this.

Theorem 107. A rectangle $a \times b$ paved by semi-integer rectangles (i.e., each has one integer side) is semi-integer.
