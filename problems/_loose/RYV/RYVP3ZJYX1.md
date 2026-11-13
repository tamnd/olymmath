---
tag: RYVP3ZJYX1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154813
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine whether the series
$$
\sum_{n=1}^{\infty} \frac{1}{n^{1+\lceil\sin n\rceil}}
$$
is convergent or divergent.
Here $\lceil x\rceil$ denotes the least integer greater than or equal to $x$.
