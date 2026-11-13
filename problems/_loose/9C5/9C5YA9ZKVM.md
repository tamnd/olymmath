---
tag: 9C5YA9ZKVM
kind: problem
type: answer
answer: \frac{3}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220240
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=355
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n\geq 3$ cities in a country and between any two cities $A$ and $B$, there is either a one way road from $A$ to $B$, or a one way road from $B$ to $A$ (but never both). Assume the roads are built such that it is possible to get from any city to any other city through these roads, and define $d(A,B)$ to be the minimum number of roads you must go through to go from city $A$ to $B$. Consider all possible ways to build the roads. Find the minimum possible average value of $d(A,B)$ over all possible ordered pairs of distinct cities in the country.
