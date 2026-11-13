---
tag: ZFHV63RRJQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132961
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be integers greater than 1, prove:
$$
1^{m}+2^{m}+\cdots+n^{m}=\frac{1}{m+1}\left\{(n+1) \sum_{k=1}^{m} C_{m}^{k} n^{k}-\sum_{j=1}^{m-1}\left(C_{m+1}^{j} \sum_{i=1}^{n} i^{j}\right)\right\} .
$$
