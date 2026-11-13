---
tag: BW9JRWB35T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For polynomials $P, Q, R$ of degree $n$, for all $x$ it holds that $P(x) \leqq Q(x) \leqq R(x)$, and there exists a $u$ such that $P(u)=R(u)$. Prove that there exists a $0 \leqq \lambda \leqq 1$ such that $Q(x)=\lambda \cdot P(x)+(1-\lambda) \cdot R(x)$.
