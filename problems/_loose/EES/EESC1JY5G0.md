---
tag: EESC1JY5G0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a convex quadrilateral pyramid $M A B C D$ with vertex $M$. A plane intersects the edges $M A, M B, M C$ and $M D$ at points $A_{1}, B_{1}, C_{1}$ and $D_{1}$ respectively. Prove that

$$
S_{B C D} \frac{M A}{M A_{1}}+S_{A B D} \frac{M C}{M C_{1}}=S_{A B C} \frac{M D}{M D_{1}}+S_{A C D} \frac{M B}{M B_{1}}
$$
