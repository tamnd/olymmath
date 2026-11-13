---
tag: TP0ZT7NWEQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_{k}(n)=\sum_{j=1}^{n} j^{k}$, for $k, n \in \mathbb{N}$. Show that for any $k, n \in \mathbb{N}$

$$
n S_{k}(n)=S_{k+1}(n)+\sum_{i=1}^{n-1} S_{k}(i)
$$
