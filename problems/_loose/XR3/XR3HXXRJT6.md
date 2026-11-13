---
tag: XR3HXXRJT6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of real numbers $\left(a_{n}\right)_{n=1}^{\infty}$ satisfies for every $n \geqq 1$ the equation

$$
\frac{a_{n+3}-a_{n+2}}{a_{n}-a_{n+1}}=\frac{a_{n+3}+a_{n+2}}{a_{n}+a_{n+1}}
$$

and additionally, $a_{11}=4, a_{22}=2, a_{33}=1$. Prove that for every natural number $k$ the sum

$$
a_{1}^{k}+a_{2}^{k}+\ldots+a_{100}^{k}
$$

is a perfect square of a natural number.
