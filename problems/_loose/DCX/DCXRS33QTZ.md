---
tag: DCXRS33QTZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37604
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35702
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234216
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1996
    source: hf-ai-mo-aops
    label: 1996 China Team Selection Test
---
Let $ M = \lbrace 2, 3, 4, \ldots 1000 \rbrace$ . Find the smallest $ n \in \mathbb{N}$ such that any $ n$ -element subset of $ M$ contains 3 pairwise disjoint 4-element subsets $ S, T, U$ such that

**I.** For any 2 elements in $ S$ , the larger number is a multiple of the smaller number. The same applies for $ T$ and $ U$ .

**II.** For any $ s \in S$ and $ t \in T$ , $ (s,t) = 1$ .

**III.** For any $ s \in S$ and $ u \in U$ , $ (s,u) > 1$ .
