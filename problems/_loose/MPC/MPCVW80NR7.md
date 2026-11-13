---
tag: MPCVW80NR7
kind: problem
type: answer
answer: '{0,1,2,\ldots,n-1}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179093
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ be a natural number. Determine the set of values that the sum

$$
S=\left[x_{2}-x_{1}\right]+\left[x_{3}-x_{2}\right]+\ldots+\left[x_{n}-x_{n-1}\right]
$$

can take, where $x_{1}, x_{2}, \ldots, x_{n}$ are real numbers with integer parts $1,2, \ldots, n$.
