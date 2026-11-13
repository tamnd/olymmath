---
tag: Z2HYYPMTTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166886
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{i j}(i, j=1,2, \ldots, n)$ be nonnegative integers. We know that if $a_{i j}=0$, then

$$
\sum_{k=1}^{n}\left(a_{i k}+a_{j k}\right) \geqq n
$$

Prove that

$$
\sum_{i=1}^{n} \sum_{j=1}^{n} a_{i j} \geqq \frac{n^{2}}{2}
$$
