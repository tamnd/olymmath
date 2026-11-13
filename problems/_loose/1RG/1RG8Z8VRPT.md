---
tag: 1RG8Z8VRPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define sequence $(a_n):a_n=2^n+3^n+6^n+1(n\in\mathbb{Z}_+)$.
Are there intenger $k\geq2$, satisfying that $\gcd(k,a_i)=1$ for all $k\in\mathbb{Z}_+$?
If yes, find the smallest $k$. If not, prove this.
