---
tag: H3D9ZBXSZT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221765
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove it is possible to find $2^{2021}$ different pairs of positive integers $(a_i,b_i)$ such that:
$$ \frac{1}{a_ib_i}+\frac{1}{a_2b_2} + \ldots + \frac{1}{a_{2^{2021}}b_{2^{2021}}} = 1 $$
$$ a_1+a_2 +\ldots a_{2^{2021}} +b_1+b_2 + \ldots +b_{2^{2021}} = 3^{2022} $$
**Note: **Pairs $(a,b)$ and $(c,d)$ are different if $a \neq c$ or $b \neq d$
