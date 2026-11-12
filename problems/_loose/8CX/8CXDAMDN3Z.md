---
tag: 8CXDAMDN3Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3450593
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73462
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2024
    source: hf-ai-mo-aops
    label: 2024 Princeton University Math Competition
---
Let $\{a_n\}_{n=0}^{\infty}$ be the sequence defined by the recurrence relation $a_{n+3}=2a_{n+2} - 23a_{n+1}+3a_n$ for all $n \ge 0,$ with initial conditions $a_0=20, a_1=0,$ and $a_2=23.$ Let $b_n=a_n^3$ for all $n \ge 0.$ There exists a unique positive integer $k$ and constants $c_0, \ldots, c_{k-1}$ with $c_0 \neq 0$ and $c_{k-1} \neq 0$ such that for all sufficiently large $n,$ we have the recurrence relation $b_{n+k} = \sum_{t=0}^{k-1} c_t b_{n+t}.$ Find $k+\sqrt{|c_{k-1}|}+\sqrt{|c_0|}.$
