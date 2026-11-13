---
tag: 4SD5PHY49F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254426
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. Determine integers, $n+1 \leq r \leq 3n+2$ such that for all integers $a_1,a_2,\dots,a_m,b_1,b_2,\dots,b_m$ satisfying the equations
$$
a_1b_1^k+a_2b_2^k+\dots + a_mb_m^k=0 $$
for every $1 \leq k \leq n$, the condition
$$
r \mid
a_1b_1^r+a_2b_2^r+\dots + a_mb_m^r=0 $$
also holds.
