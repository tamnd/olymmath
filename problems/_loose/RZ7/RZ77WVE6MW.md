---
tag: RZ77WVE6MW
kind: problem
type: answer
answer: (-1)^{n}2^{2}\cdot\frac{2n+1}{2+1}\binom{n+}{n-}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Moriarity Identity) Suppose $m, n$ are positive integers, $n \geqslant m$, then $\sum_{k=m}^{n}(-1)^{k} C_{k}^{m} C_{n+k}^{2 k} \cdot 2^{2 k}=(-1)^{n} \cdot 2^{2 m} \cdot \frac{2 n+1}{2 m+1} \cdot C_{m+n}^{2 m}$.
