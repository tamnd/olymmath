---
tag: HXZWB58JJ3
kind: problem
type: answer
answer: "1000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\lambda$ be the positive root of the equation $t^{2}-1998 t-1=0$. Let the sequence $\left(x_{n}\right)$ be defined by $x_{0}=1$ and, for all $n \geqslant 0$, by:

$$
x_{n+1}=\left[\lambda x_{n}\right]
$$

where $[x]$ is the integer part of $x$. Calculate the remainder of the Euclidean division of $x_{1998}$ by 1998.
