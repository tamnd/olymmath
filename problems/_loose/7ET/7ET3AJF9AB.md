---
tag: 7ET3AJF9AB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h56060
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2004
    source: hf-ai-mo-aops
    label: 2004 China Team Selection Test
---
Let $k \geq 2, 1 < n_1 < n_2 < \ldots < n_k$ are positive integers, $a,b \in \mathbb{Z}^+$ satisfy $$ \prod^k_{i=1} \left( 1 - \frac{1}{n_i} \right) \leq \frac{a}{b} < \prod^{k-1}_{i=1} \left( 1 - \frac{1}{n_i} \right) $$
Prove that: $$ \prod^k_{i=1} n_i \geq (4 \cdot a)^{2^k - 1}. $$
