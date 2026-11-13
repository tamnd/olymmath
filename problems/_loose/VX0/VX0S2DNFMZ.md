---
tag: VX0S2DNFMZ
kind: problem
type: answer
answer: 3n+2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(a_{n}\right)_{n \geq 1}$ be a sequence of positive real numbers such that $a_{1}=1$ and

$$
\frac{1}{a_{1}+a_{2}}+\frac{1}{a_{2}+a_{3}}+\ldots+\frac{1}{a_{n-1}+a_{n}}=a_{n}-1, \text { for all } n \geq 2
$$

Determine the integer part of the number $A_{n}=a_{n} a_{n+1}+a_{n} a_{n+2}+a_{n+1} a_{n+2}$, where $n \in \mathbb{N}^{*}$.

Nelu Gerg, Slatina
