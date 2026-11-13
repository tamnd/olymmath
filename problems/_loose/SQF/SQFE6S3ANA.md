---
tag: SQFE6S3ANA
kind: problem
type: answer
answer: \det(A + B) = \det(C + A)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A,B,C\in \mathcal{M}_3(\mathbb{R})$ such that $\det A=\det B=\det C$ and $\det(A+iB)=\det(C+iA)$. Prove that $\det (A+B)=\det (C+A)$.
