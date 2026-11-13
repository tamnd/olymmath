---
tag: 2XG2M3DJ3Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there exists just one function $ f:\mathbb{N}^2\longrightarrow\mathbb{N} $ which simultaneously satisfies:

$ \text{(1)} f(m,n)=f(n,m), \forall m,n\in\mathbb{N} $
$ \text{(2)} f(n,n)=n, \forall n\in\mathbb{N} $
$ \text{(3)} n>m\implies (n-m)f(m,n)=nf(m,n-m), \forall m,n\in\mathbb{N} $
