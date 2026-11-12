---
tag: AQ2Y1RQBTA
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8619
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(4 points) Let two sequences of numbers $\left(x_{0}, x_{1}, \ldots, x_{2009}\right)$, $\left(y_{0}, y_{1}, \ldots, y_{2009}\right)$ be constructed according to the following rules:
a) $x_{0}=12, x_{1}=\frac{1}{3}, y_{0}=4, y_{1}=\frac{1}{18}$,

b) $x_{i+1}=x_{i-1}+4 x_{i}$ and $y_{i+1}=y_{i-1}-4 y_{i}$ for $i=1, \ldots, 2008$.

Calculate the value of $x_{2009} y_{2008}+x_{2008} y_{2009}$.
