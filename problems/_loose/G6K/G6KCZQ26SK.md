---
tag: G6KCZQ26SK
kind: problem
type: answer
answer: A=0,B=1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166555
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find all non-negative real numbers $A, B$ such that for every $x > 1$, the following holds:

$$
\left[\frac{1}{A x+\frac{B}{x}}\right]=\frac{1}{A \cdot[x]+\frac{B}{[x]}}
$$
