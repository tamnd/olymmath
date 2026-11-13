---
tag: Y15CFFN5SW
kind: problem
type: answer
answer: \frac{3}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185945
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Given a natural number $n \geq 2$. Let $u$ be the circumcircle of a regular $2 n$-gon $A_{0} A_{1} \ldots A_{2 n-1}$.

A set of three vertices $A_{i}, A_{j}, A_{k}$ of this $2 n$-gon is called one-sided if there is a semicircular arc $h$ on the circumference $u$, including its two endpoints, that contains $A_{i}, A_{j}$, and $A_{k}$.

Determine the probability $w$ that a randomly chosen set $M=\left\{A_{i}, A_{j}, A_{k}\right\}$ of three vertices is one-sided.

b) Determine the limit $\lim _{n \rightarrow \infty} w_{n}$ if it exists.
