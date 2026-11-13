---
tag: 2Q4FBBTF8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{i} \in \mathbf{R}_{+}, i=1,2, \cdots, n$. Denote
$$
D_{k}(a)=\frac{k}{\mathrm{C}_{n}^{k}} \sum \frac{1}{a_{i_{1}}+a_{i_{2}}+\cdots+a_{i_{k}}},
$$

where the summation is over all $\mathrm{C}_{n}^{k}$ combinations of $k$ elements $i_{1}, i_{2}, \cdots, i_{k}$ from $1,2, \cdots, n$. Prove:
$$
D_{k}(a) \geqslant D_{k+1}(a),
$$

where, $k=1,2, \cdots, n-1$.
