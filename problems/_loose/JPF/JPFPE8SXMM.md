---
tag: JPFPE8SXMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3065260
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2023
    source: hf-ai-mo-aops
    label: 2023 Stanford Mathematics Tournament
---
Let $S$ be the number of bijective functions $f:\{0,1,\dots,288\}\rightarrow\{0,1,\dots,288\}$ such that $f((m+n)\pmod{17})$ is divisible by $17$ if and only if $f(m)+f(n)$ is divisible by $17$ . Compute the largest positive integer $n$ such that $2^n$ divides $S$ .
