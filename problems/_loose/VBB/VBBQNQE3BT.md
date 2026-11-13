---
tag: VBBQNQE3BT
kind: problem
type: answer
answer: 2020^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We define a sequence of real numbers $a_{1}, a_{2}, a_{3}, \ldots$ by $a_{1}=3 / 2$, then

$$
a_{n+1}=1+\frac{n}{a_{n}}
$$

for all integers $n \geqslant 1$.

Find an integer $k \geqslant 1$ such that $2020 \leqslant a_{k}<2021$.
