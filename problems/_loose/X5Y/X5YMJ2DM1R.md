---
tag: X5YMJ2DM1R
kind: problem
type: answer
answer: 503^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90686
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \ldots, a_{2013}$ be real numbers satisfying the following conditions:

- $a_{1}=a_{2013}=0$
- $\left|a_{i}-a_{i+1}\right|<1$, for $1 \leq i \leq 2012$.
- $\sum_{i=1}^{2013} a_{i}=0$.

Find the greatest possible value of the sum $\sum_{i=1}^{m} a_{i}$, where $m(1 \leq m \leq 2013)$ is allowed to vary, in addition to the sequence $\left\{a_{i}\right\}$.
