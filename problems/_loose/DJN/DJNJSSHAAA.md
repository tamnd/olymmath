---
tag: DJNJSSHAAA
kind: problem
type: answer
answer: 3 \leq E(x, y, z) \leq 6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244033
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The non-negative numbers $x,y,z$ satisfy the relation $x + y+ z = 3$. Find the smallest possible numerical value and the largest possible numerical value for the expression
$$E(x,y, z) = \sqrt{x(y + 3)} + \sqrt{y(z + 3)} + \sqrt{z(x + 3)} .$$
