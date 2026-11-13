---
tag: RZRD4VXDDD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127479
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a_{1}, a_{2}, \cdots, a_{n}>0(n \geqslant 2$, $\left.n \in \mathbf{Z}_{+}\right)$, and it satisfies $\sum_{i=1}^{n} a_{i}=n$. Prove:
$$
\sum_{i=1}^{n} \sqrt[n+1]{a_{i}} \geqslant \frac{2 n}{n+1}\left(\sum_{1 \leqslant i<j \leqslant n} a_{i} a_{j}-\frac{n^{2}-2 n-1}{2}\right) .
$$
