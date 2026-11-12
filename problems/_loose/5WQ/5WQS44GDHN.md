---
tag: 5WQS44GDHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3580187
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2707
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Iran Team Selection Test
---
Let $ a_n $ be a sequence of positive real numbers such that for every $ n > 2025 $, we have:
$$
a_n = \max_{1 \leq i \leq 2025} a_{n-i} - \min_{1 \leq i \leq 2025} a_{n-i}
$$
Prove that there exists a natural number $ M $ such that for all $ n > M $, the following holds:
$$
a_n < \frac{1}{1404}
$$
*Proposed by Navid Safaei*
