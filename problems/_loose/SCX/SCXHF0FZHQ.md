---
tag: SCXHF0FZHQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 ELMO  Shortlist
    url: https://artofproblemsolving.com/community/c6h3600605
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2025
    source: hf-ai-mo-aops
    label: 2025 ELMO  Shortlist
---
Let $n$ and $k$ be fixed positive integers. Let $T$ be the set of all infinite tuples $A = (a_0, a_1, ...)$ of integers with $0 \leq a_i \leq k$ for each $i$ , finitely many nonzero $a_i$ , and $$ \sum_{i=0}^\infty 2^i a_i = n. $$
Compute $$ \sum_{A \in T} \prod_{i=0}^\infty \binom{k}{a_i}. $$

*Oron Wang*
