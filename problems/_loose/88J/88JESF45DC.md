---
tag: 88JESF45DC
kind: problem
type: answer
answer: \frac{81}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20273
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Real numbers $x, y, z$ are chosen such that the following equalities hold: $x y + y z + z x = 4$, $x y z = 6$. Prove that for any such choice, the value of the expression

$$
\left(x y - \frac{3}{2}(x + y)\right)\left(y z - \frac{3}{2}(y + z)\right)\left(z x - \frac{3}{2}(z + x)\right)
$$

is always the same number, and find this number.
