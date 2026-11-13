---
tag: 1CX1DDR0D4
kind: problem
type: answer
answer: (,b,)=(,2d,3d)or(,3d,6d)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106570
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $a, b, c$ satisfying $a<b<c$, find all triples $(a, b, c)$ that satisfy the equation
$$
\frac{(a, b)+(b, c)+(c, a)}{a+b+c}=\frac{1}{2}
$$

where $(x, y)$ denotes the greatest common divisor of the positive integers $x$ and $y$.
