---
tag: 3YB07AW1MB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2766622
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74017
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2018
    source: hf-ai-mo-aops
    label: 2018 Stanford Mathematics Tournament
---
Let $F_k$ denote the series of Fibonacci numbers shifted back by one index, so that $F_0 = 1$ , $F_1 = 1,$ and $F_{k+1} = F_k +F_{k-1}$ . It is known that for any fixed $n \ge 1$ there exist real constants $b_n$ , $c_n$ such that the following recurrence holds for all $k \ge 1$ : $$ F_{n\cdot (k+1)} = b_n \cdot F_{n \cdot k} + c_n \cdot F_{n\cdot (k-1)}. $$ Prove that $|c_n| = 1$ for all $n \ge 1$ .
