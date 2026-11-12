---
tag: 7CEX7N0ZTP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29576
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there does not exist a polynomial

$$
P(x)=a_{0} x^{n}+a_{1} x^{n-1}+\ldots+a_{n-1} x+a_{n}
$$

such that all numbers $P(0), P(1), P(2), \ldots$, are prime.

Note. The statement formulated in the problem was first proved by L. Euler¹). He also provided examples of polynomials whose values for many consecutive integer values of $x$ are prime (for example, in the case of the polynomial $P(x)=x^{2}-79 x+160180$ the numbers $P(0)=1601, P(1)=1523$, $P(2), P(3), \ldots, P(79)$ are prime).
