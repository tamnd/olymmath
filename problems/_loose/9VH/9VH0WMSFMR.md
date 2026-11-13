---
tag: 9VH0WMSFMR
kind: problem
type: answer
answer: 7,2,4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190910
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all positive integers $a$ for which the equation

$$
\left(1+\frac{1}{x}\right) \cdot\left(1+\frac{1}{x+1}\right) \cdots\left(1+\frac{1}{x+a}\right)=a-x
$$

has at least one integer solution for $x$.

For each such $a$, provide the corresponding solutions.

(Richard Henner)
