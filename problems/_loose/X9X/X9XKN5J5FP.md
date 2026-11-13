---
tag: X9XKN5J5FP
kind: problem
type: answer
answer: (3x+2y,4x+3y)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78424
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find two simple solutions to the equation: $(x-1)^{2}+(x+1)^{2}=y^{2}+1$, where $x$ and $y$ are non-negative integers.

Find three integers $a, b$, and $c$ such that if $(x, y)$ is a solution to the equation, then $(a x+b y, c x+a y)$ is also a solution.

Deduce that the equation has infinitely many solutions.
