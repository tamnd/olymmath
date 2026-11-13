---
tag: 2VZQWZDSD6
kind: problem
appearances:
  - at: pumac/2023/na7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3435032
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $f(n)$ to be the smallest integer such that for every positive divisor $d \mid n,$ either $n \mid d^d$ or $d^d \mid n^{f(n)}.$ How many positive integers $b < 1000$ which are not squarefree satisfy the equation $f(2023) \cdot f(b) = f(2023b)$ ?
