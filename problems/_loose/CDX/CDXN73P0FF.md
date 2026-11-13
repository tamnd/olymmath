---
tag: CDXN73P0FF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=190194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers $a_{1}, a_{2}, \ldots, a_{n}$ form an arithmetic progression. Prove that

$$
\sum_{k=2}^{n}(-1)^{k-1} a_{k}^{2}=\frac{n}{2 n-1}\left(a_{1}^{2}-a_{2 n}^{2}\right)
$$