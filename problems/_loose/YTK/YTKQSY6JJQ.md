---
tag: YTKQSY6JJQ
kind: problem
type: answer
answer: \frac{-3+\sqrt{13}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(x_{n}\right)$ be the sequence defined by

$$
x_{1}=1, x_{2}=1, x_{n+1}=\frac{x_{n}+1}{x_{n-1}+4}
$$

$(n=2,3,4, \ldots)$.

Determine whether this sequence is convergent, and if so, find its limit.
