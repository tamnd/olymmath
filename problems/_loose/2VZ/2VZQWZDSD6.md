---
tag: 2VZQWZDSD6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
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
unplaced:
  - at: pumac/2023
    source: hf-ai-mo-aops
    label: 2023 Princeton University Math Competition
---
Define $f(n)$ to be the smallest integer such that for every positive divisor $d \mid n,$ either $n \mid d^d$ or $d^d \mid n^{f(n)}.$ How many positive integers $b < 1000$ which are not squarefree satisfy the equation $f(2023) \cdot f(b) = f(2023b)$ ?
