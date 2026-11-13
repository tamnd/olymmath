---
tag: JDP9B4DXXC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95176
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $\left\{a_{n}\right\}: a_{1}=0, a_{n}=a_{\left[\frac{n}{2}\right]}+(-1)^{\frac{n(n+1)}{2}}(n=2, 3, \ldots)$, for each non-negative integer $k$, find the number of indices $n$ that satisfy $2^{k} \leq n<2^{k+1}$, and $a_{n}=0$.
