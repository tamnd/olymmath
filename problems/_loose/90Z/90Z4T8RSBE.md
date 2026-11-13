---
tag: 90Z4T8RSBE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a real-coefficient polynomial $f(x)$ of degree $\geqslant 1$. Prove: For each $c>0$, there exists a positive integer $n_{0}$, such that for each polynomial $p(x)$ of degree $\geqslant n_{0}$ and leading coefficient equal to 1, the number of integers $x$ satisfying the inequality
$$
|f(p(x))| \leqslant C
$$
does not exceed the degree of $p(x)$.
