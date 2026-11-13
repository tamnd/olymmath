---
tag: 3DQDPCX2T6
kind: problem
type: answer
answer: x_{2022} = 2020^4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_0,x_1,x_2,\dots$ be a infinite sequence of real numbers, such that the following three equalities are true:
I- $x_{2k}=(4x_{2k-1}-x_{2k-2})^2$, for $k\geq 1$
II- $x_{2k+1}=|\frac{x_{2k}}{4}-k^2|$, for $k\geq 0$
III- $x_0=1$
a) Determine the value of $x_{2022}$
b) Prove that there are infinite many positive integers $k$, such that $2021|x_{2k+1}$
