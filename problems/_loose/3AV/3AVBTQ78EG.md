---
tag: 3AVBTQ78EG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210917
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n=0,\ 1,\ 2,\ \cdots$, let

$a_n=\int_{n}^{n+1} \{xe^{-x}-(n+1)e^{-n-1}(x-n)\}\ dx,$

$b_n=\int_{n}^{n+1} \{xe^{-x}-(n+1)e^{-n-1}\}\ dx.$

Find $\lim_{n\to\infty} \sum_{k=0}^n (a_k-b_k).$
