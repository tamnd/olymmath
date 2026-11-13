---
tag: JPK6NJV3X6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1406085
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15287
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148285
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2017
    source: hf-ai-mo-aops
    label: 2017 China Team Selection Test
---
Let $X$ be a set of $100$ elements. Find the smallest possible $n$ satisfying the following condition: Given a sequence of $n$ subsets of $X$ , $A_1,A_2,\ldots,A_n$ , there exists $1 \leq i < j < k \leq n$ such that $$ A_i \subseteq A_j \subseteq A_k \text{ or } A_i \supseteq A_j \supseteq A_k. $$
