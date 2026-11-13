---
tag: E82BDY7NCT
kind: problem
type: answer
answer: (5,2,4),(5,3,1),(7,3,5),(7,4,2),(2n+1,n,n+2),(2n+1,n+1,n-1),(16,9,4)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a triple of integers $(x, y, z)$ is of the nice type if $x, y$, and $z$ are positive integers, with $y \geq 2$, and $x^{2}-3 y^{2}=z^{2}-3$.

a) Find a triple $(x, y, z)$ of the nice type with $x=5$ and $x=7$.

b) Show that for every $x \geq 5$ and odd, there are at least two distinct triples $\left(x, y_{1}, z_{1}\right)$ and $\left(x, y_{2}, z_{2}\right)$ of the nice type.

c) Find some triple of the nice type with $x$ even.
