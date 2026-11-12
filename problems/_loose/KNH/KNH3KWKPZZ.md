---
tag: KNH3KWKPZZ
kind: problem
type: answer
answer: (1,2,3),(-1,-2,-3),(1,-2,-1),(2,-1,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find such non-zero, unequal integers $a, b, c$ that the expression

$$
x(x-a)(x-b)(x-c)+1
$$

can be factored into a product of two polynomials with integer coefficients.
