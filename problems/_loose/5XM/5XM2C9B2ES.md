---
tag: 5XM2C9B2ES
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205915
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an even positive integer. An $n$-degree monic polynomial $P(x)$ has $n$ real roots (not necessarily distinct). Suppose $y$ is a positive real number such that for any real number $t<y$, we have $P(t)>0$. Prove that
$$P(0)^{\frac{1}{n}}-P(y)^{\frac{1}{n}}\ge y.$$
