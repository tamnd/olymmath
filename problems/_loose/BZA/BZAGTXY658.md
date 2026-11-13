---
tag: BZAGTXY658
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ p$ be a positive integer. Define the function $ f: \mathbb{N}\to\mathbb{N}$ by $ f(n)=a_1^p+a_2^p+\cdots+a_m^p$, where $ a_1, a_2,\ldots, a_m$ are the decimal digits of $ n$ ($ n=\overline{a_1a_2\ldots a_m}$). Prove that every sequence $ (b_k)^\infty_{k=0}$ of positive integer that satisfy $ b_{k+1}=f(b_k)$ for all $ k\in\mathbb{N}$, has a finite number of distinct terms. $ \mathbb{N}=\{1,2,3\ldots\}$
