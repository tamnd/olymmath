---
tag: 7QWFX9GMPD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h519398
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2013
    source: hf-ai-mo-aops
    label: 2013 Stanford Mathematics Tournament
---
Let $f_1(n)$ be the number of divisors that $n$ has, and define $f_k(n)=f_1(f_{k-1}(n))$ . Compute the smallest integer $k$ such that $f_k(2013^{2013})=2$ .
