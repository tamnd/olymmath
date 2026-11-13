---
tag: AQVQWVH48W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a polynomial $P\in \mathbb{Z}[X]$ of degree $k$, show that there always exist $2d$ distinct integers $x_1, x_2, \cdots x_{2d}$ such that $$P(x_1)+P(x_2)+\cdots P(x_{d})=P(x_{d+1})+P(x_{d+2})+\cdots + P(x_{2d})$$ for some $d\le k+1$.

[Extra: Is this still true if $d\le k$? (Of course false for linear polynomials, but what about higher degree?)]
