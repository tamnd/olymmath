---
tag: 8Y7YQVYTY8
kind: problem
type: answer
answer: 2^{200}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the collinear points $M_{1}, M_{2}, M_{3}, \ldots, M_{2015}$ in this order, such that $M_{1} M_{2}=2$ $\mathrm{cm}, M_{2} M_{3}=2 M_{1} M_{2}, M_{3} M_{4}=2 M_{2} M_{3}, \ldots, M_{2014} M_{2015}=2 M_{2013} M_{2014}$.

a) Calculate the length of the segment $\left[M_{1} M_{200}\right]$.

b) Compare the lengths of the segments $\left[M_{1} M_{200}\right]$ and $\left[M_{200} M_{300}\right]$.

c) Prove that for any natural numbers $a, b, c, d$, and $1 \leq a<b \leq c<d \leq 2015$, the segments $\left[M_{a} M_{b}\right]$ and $\left[M_{c} M_{d}\right]$ have different lengths.

Dorin Popa, Slatina
