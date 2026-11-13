---
tag: Q3BKA1QYVC
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The eight numbers 1, $2, \ldots, 8$ are to be distributed to the vertices of a cube in such a way that the following conditions are met:

(1) Each vertex of the cube is assigned exactly one of the eight numbers, and each of these numbers must appear in the distribution.

(2) If one adds the four numbers at the vertices of each face of the cube, the sum on all six faces is the same.

As many distributions of the eight numbers to the vertices should be compiled as possible, such that each of these distributions meets conditions (1), (2), and no two of these distributions are congruent to each other, i.e., can be transformed into each other by rotation or reflection.

Determine the number of distributions that appear in such a compilation!
