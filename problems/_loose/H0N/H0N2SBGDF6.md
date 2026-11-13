---
tag: H0N2SBGDF6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161401
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A bee moves along an infinite honeycomb (a plane tiled with regular hexagons). The bee starts from a predetermined hexagon, and in each step, it must move to an adjacent hexagon (hexagons are adjacent if they share an edge), and it cannot visit a hexagon it has already been to. For any natural number $n$, let $x_{n}$ denote the number of possible paths of $n$ steps. Prove:

$$
2 \cdot 3^{n} \leqslant x_{n} \leqslant 6 \cdot 5^{n-1}
$$
