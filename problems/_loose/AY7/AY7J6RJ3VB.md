---
tag: AY7J6RJ3VB
kind: problem
type: answer
answer: "-2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}=a \cdot x_{2}=1$, and
$$
x_{n+2}=\frac{x_{n-1}^{2}-5}{x_{n}}\left(n \in \mathbf{N}^{*}\right) .
$$

Find the value of $a$ for which $\left\{x_{n}\right\}$ is a periodic sequence with a period of 4.
