---
tag: TD1FT4C4YV
kind: problem
type: answer
answer: (7,11,1917)(7,11,1977)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182517
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are looking for an ordered quadruple of four prime numbers $p_{i}$ with $i=1 ; 2 ; 3 ; 4$, that satisfy the following conditions:

1. It is $p_{1}<p_{2}<p_{3}<p_{4}$.
2. $p_{3}$ and $p_{4}$ form a prime twin pair.
3. The sum of the two smaller prime numbers is equal to the arithmetic mean of the two larger ones and equal to twice the square of a fifth prime number.
4. The product $p_{1} \cdot p 2$ is maximal.

Form the triples $\left(p_{1} ; p_{2} ; 100 p_{3}+p_{4}\right)$ and $\left(p_{1} ; p_{2} ; 100 p_{3}+p_{1} p_{2}\right)$!
