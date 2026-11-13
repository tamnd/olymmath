---
tag: CP49FBNY39
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79944
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number and $n$ an integer.

Show that

$$
v_{p}(n!)=\sum_{k=1}^{\left\lfloor\frac{\ln n}{\ln p}\right\rfloor}\left\lfloor\frac{n}{p^{k}}\right\rfloor
$$
