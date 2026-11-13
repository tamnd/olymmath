---
tag: 2Q1JC6YW6E
kind: problem
type: answer
answer: \frac{np}{8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189884
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cuboid with dimensions $m \times n \times p$ ($m, n, p$ are natural numbers) is composed of $m n p$ unit cubes. Each unit cube is associated with a real number. For every square with dimensions $m \times 1 \times 1$ or $1 \times n \times 1$ or $1 \times 1 \times p$, composed of unit cubes, it holds that: the numbers associated with the unit cubes of these cuboids, taken in order, form an arithmetic progression. The sum of the numbers associated with the cubes at the vertices of the original cuboid is equal to $a$. Determine the sum of all the numbers associated with the unit cubes.
