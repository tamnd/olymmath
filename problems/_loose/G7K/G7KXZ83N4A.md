---
tag: G7KXZ83N4A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=19335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players take turns replacing one (any) of the coefficients $a_{7}, \ldots, a_{0}$ in the expression

$$
a_{7} \cdot 8^{7}+a_{6} \cdot 8^{6}+a_{5} \cdot 8^{5}+\ldots+a_{2} \cdot 8^{2}+a_{1} \cdot 8+a_{0} \cdot 1
$$

with +1 or -1 (at their choice). Prove that the second player can always ensure that the result after his last move will be divisible by 13.
