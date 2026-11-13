---
tag: 2JDJZE7KJB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Divide $2 n(n \geqslant 2)$ distinct integers into two groups $a_{1}, a_{2}, \cdots, a_{n} ; b_{1}, b_{2}, \cdots, b_{n}$. Prove:
$$
T_{n}=\sum_{\substack{1 \leqslant i \leqslant n \\ 1 \leq j \leqslant n}}\left|a_{i}-b_{j}\right|-\sum_{1 \leqslant i<j \leqslant n}\left(\left|a_{j}-a_{i}\right|+\left|b_{j}-b_{i}\right|\right) \geqslant n .
$$
