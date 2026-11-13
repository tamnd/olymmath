---
tag: AD37AXNMX7
kind: problem
type: answer
answer: <-3or\geq3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(x_{n}\right)$ be the sequence of real numbers for which

$$
x_{1}=\sqrt{3} (1) \text { and } x_{n+1}=\sqrt{9 x_{n}^{2}+11 x_{n}+3} (n=1,2,3, \ldots)
$$

holds. For every real number $a \neq 0$, let $\left(y_{n}\right)$ be the sequence defined by

$$
y_{n}=\frac{x_{n}}{a^{n}} (n=1,2,3, \ldots)
$$

Determine all $a \neq 0$ for which the sequence $\left(y_{n}\right)$ is convergent.
