---
tag: 674GSJMV0C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169310
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S_{m}$ denote the sum of the first $m$ elements of the sequence $\left(a_{m}\right)$. Prove that if for all positive integers $n \neq k$,

$$
\frac{S_{n+k}}{n+k}=\frac{S_{n}-S_{k}}{n-k}
$$

then $\left(a_{m}\right)$ is an arithmetic sequence.
