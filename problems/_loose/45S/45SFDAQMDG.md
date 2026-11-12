---
tag: 45SFDAQMDG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Silk Road
    url: https://artofproblemsolving.com/community/c6h3424992
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: silk-road/2024
    source: hf-ai-mo-aops
    label: 2024 Silk Road
---
Let $a_1, a_2, \ldots$ be a strictly increasing sequence of positive integers, such that for any positive integer $n$ , $a_n$ is not representable in the for $\sum_{i=1}^{n-1}c_ia_i$ for $c_i \in \{0, 1\}$ . For every positive integer $m$ , let $f(m)$ denote the number of $a_i$ that are at most $m$ . Show that for any positive integers $m, k$ , we have that $$ f(m) \leq a_k+\frac{m} {k+1}. $$
