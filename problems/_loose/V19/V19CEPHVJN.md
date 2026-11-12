---
tag: V19CEPHVJN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers $x_{1}, x_{2}, \ldots$ are constructed according to the following rule: $x_{1}=2$; $x_{2}=\left(x_{1}^{5}+1\right) / 5 x_{1} ; x_{3}=\left(x_{2}^{5}+1\right) / 5 x_{2}, \ldots$ Prove that no matter how long we continue this construction, all the resulting numbers will be no less than $1 / 5$ and no more than 2.
