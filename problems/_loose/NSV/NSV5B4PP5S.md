---
tag: NSV5B4PP5S
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a \geq 2$ be a real number. Denote by $x_{1}$ and $x_{2}$ the roots of the equation $x^{2}-a x+1=0$ and set $S_{n}=x_{1}^{n}+x_{2}^{n}, n=1,2, \ldots$

a) Prove that the sequence $\left\{\frac{S_{n}}{S_{n+1}}\right\}_{n=1}^{\infty}$ is decreasing.

b) Find all $a$ such that

$$
\frac{S_{1}}{S_{2}}+\frac{S_{2}}{S_{3}}+\cdots+\frac{S_{n}}{S_{n+1}}>n-1
$$

for any $n=1,2, \ldots$.

Oleg Mushkarov
