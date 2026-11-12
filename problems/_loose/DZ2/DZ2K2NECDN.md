---
tag: DZ2K2NECDN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h1626012
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-ai-mo-aops
    label: 2018 Romania National Olympiad
---
Let $n \in \mathbb{N}_{\geq 2}.$ For any real numbers $a_1,a_2,...,a_n$ denote $S_0=1$ and for $1 \leq k \leq n$ denote $$ S_k=\sum_{1 \leq i_1 < i_2 < ... <i_k \leq n}a_{i_1}a_{i_2}...a_{i_k} $$ Find the number of $n-$ tuples $(a_1,a_2,...a_n)$ such that $$ (S_n-S_{n-2}+S_{n-4}-...)^2+(S_{n-1}-S_{n-3}+S_{n-5}-...)^2=2^nS_n. $$
