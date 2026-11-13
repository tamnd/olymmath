---
tag: 8HXFV2RXHB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_0,a_1,a_2,...)$ and $(b_0,b_1,b_2,...)$ be such sequences of non-negative real numbers, that for every integer $i\geqslant 1$ holds $a_i^2\leqslant a_{i-1}a_{i+1}$ and $b_i^2\leqslant b_{i-1}b_{i+1}$.
Define sequence $c_0,c_1,c_2,...$ as
$$c_0=a_0b_0, c_n=\sum_{i=0}^{n} {{n}\choose{i}} a_ib_{n-i}.$$
Prove that for every integer $k\geqslant 1$ holds $c_{k}^2\leqslant c_{k-1}c_{k+1}$.
