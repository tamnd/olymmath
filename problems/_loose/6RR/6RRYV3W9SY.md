---
tag: 6RRYV3W9SY
kind: problem
type: answer
answer: 2^{r-n}(-1)^{\frac{n-r}{2}}C_{n}^{\frac{n-r}{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110882
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n, r$ be positive integers, $r < n$ and $n-r$ be even. Prove:
$$
\sum_{k=0}^{n-r}(-2)^{-k} C_{n}^{r+k} C_{n+r+k}^{k}=2^{r-n}(-1)^{\frac{n-r}{2}} C_{n}^{\frac{n-r}{2}} .
$$
