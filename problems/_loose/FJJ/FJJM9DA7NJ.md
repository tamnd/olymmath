---
tag: FJJM9DA7NJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are two given different polynomials $P(x),Q(x)$ with real coefficients such that $P(Q(x))=Q(P(x))$. Prove that $\forall n\in \mathbb{Z_{+}}$ polynomial:
$$\underbrace{P(P(\ldots P(P}_{n}(x))\ldots))- \underbrace{Q(Q(\ldots Q(Q}_{n}(x))\ldots))$$
is divisible by $P(x)-Q(x)$.
