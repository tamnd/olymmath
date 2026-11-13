---
tag: EBBT610R4W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $F_1=F_2=1$ and $F_n=F_{n-1}+F_{n-2}$ for any integer $n\geq3$. For some integer $k>1$, Johnny converts $F_k$ kilometers to miles, then rounds to the nearest integer. Assume that $1$ mile is exactly $1.609344$ kilometers. Estimate the smallest value of $k$ such that Johnny *does not* get that this is $F_{k-1}$ miles. An estimate of $E$ earns $2^{1-\left|A-E\right|}$ points, where $A$ is the actual answer.

*2019 CCA Math Bonanza Lightning Round #5.1*
