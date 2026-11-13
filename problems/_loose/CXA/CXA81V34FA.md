---
tag: CXA81V34FA
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128042
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the minimum value of $M$ such that the function
$$
f(x)=x^{2}-2 x+1
$$

for any partition of the interval $[0,4]$
$$
0=x_{0}<x_{1}<\cdots<x_{n-1}<x_{n}=4,
$$

satisfies
$$
\sum_{i=1}^{n}\left|f\left(x_{i}\right)-f\left(x_{i-1}\right)\right| \leqslant M .
$$
