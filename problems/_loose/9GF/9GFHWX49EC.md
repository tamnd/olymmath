---
tag: 9GFHWX49EC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set of numbers $A_{1}, A_{2}, \ldots, A_{100}$ is obtained by some permutation of the numbers $1,2, \ldots, 100$. One hundred numbers are formed:

$$
B_{1}=A_{1}, B_{2}=A_{1}+A_{2}, B_{3}=A_{1}+A_{2}+A_{3}, \ldots, B_{100}=A_{1}+A_{2}+A_{3}+\ldots+A_{100}
$$

Prove that among the remainders of the division by 100 of the numbers $B_{1}, B_{2}, \ldots, B_{100}$, there will be 11 different ones.
