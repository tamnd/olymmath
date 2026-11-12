---
tag: KSRVSMTBGC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 BMT
    url: https://artofproblemsolving.com/community/c6h2936452
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2021
    source: hf-ai-mo-aops
    label: 2021 BMT
---
Given an integer $c$ , the sequence $a_0, a_1, a_2, ...$ is generated using the recurrence relation $a_0 = c$ and $a_i = a^i_{i-1} + 2021a_{i-1}$ for all $i \ge 1$ . Given that $a_0 = c$ , let $f(c)$ be the smallest positive integer $n$ such that $a_n - 1$ is a multiple of $47$ . Compute $$ \sum^{46}_{k=1} f(k). $$
