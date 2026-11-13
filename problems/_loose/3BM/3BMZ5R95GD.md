---
tag: 3BMZ5R95GD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 2$ and $k \geq 1$ be integers. In a country, there are $n$ cities and between each pair of cities, there is a bus connection in both directions. Let $A$ and $B$ be two different cities. Prove that the number of ways to travel from $A$ to $B$ using exactly $k$ buses is equal to

$$
\frac{(n-1)^{k}-(-1)^{k}}{n}
$$
