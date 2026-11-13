---
tag: QFYBFVK5KE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132409
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(x)_{0}=1,(x)_{n}=x(x-1) \cdots(x-n+1) (n \geqslant 1)$. Prove:
$$
(x+y)_{n}=\sum_{k=0}^{n}\binom{n}{k}(x)_{k}(y)_{n-k} .
$$
