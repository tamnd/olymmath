---
tag: CDR26K6EFH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any three nonnegative reals $a$, $b$, $c$, prove that

$\left|ca-ab\right|+\left|ab-bc\right|+\left|bc-ca\right|\leq\left|b^{2}-c^{2}\right|+\left|c^{2}-a^{2}\right|+\left|a^{2}-b^{2}\right|$.

*Generalization.* For any $n$ nonnegative reals $a_{1}$, $a_{2}$, ..., $a_{n}$, prove that

$\sum_{i=1}^{n}\left|a_{i-1}a_{i}-a_{i}a_{i+1}\right|\leq\sum_{i=1}^{n}\left|a_{i}^{2}-a_{i+1}^{2}\right|$.

Here, the indices are cyclic modulo $n$; this means that we set $a_{0}=a_{n}$ and $a_{n+1}=a_{1}$.

darij
