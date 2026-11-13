---
tag: 3ZTBTF6VQ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\operatorname{ABCD}$ be a convex quadrilateral. For any point $M$ inside or on the boundary of ABCD, we define

$$
f(M)=M A+M B+M C+M D
$$

Prove that, for any $M$, we have

$$
f(M) \leqslant \max (f(A), f(B), f(C), f(D))
$$
