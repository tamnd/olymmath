---
tag: DMWXADPQ3H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A certain product has $m$ origins, with production volumes of $a_{1}, a_{2}, \cdots, a_{m}$; it has $n$ destinations, with demand volumes of $b_{1}, b_{2}, \cdots, b_{n}$, respectively. The unit transportation cost matrix from the origins to the destinations is
$$
\mathbf{C}=\left(c_{i j}\right)_{m \times n}
$$

where $c_{i j}$ is the unit transportation cost from origin $i$ to destination $j$, and the production and sales are balanced, i.e.,
$$
\sum_{i=1}^{m} a_{m}=\sum_{j=1}^{n} b_{j}
$$

How should the product be allocated to minimize the total transportation cost?
