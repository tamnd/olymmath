---
tag: 7YWJB59BJC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2986385
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60530
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252608
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2012
    source: hf-ai-mo-aops
    label: 2012 Switzerland - Final Round
---
Let n be a natural number. Let $A_1, A_2, . . . , A_k$ be distinct $3$ -element subsets of $\{1, 2, . . . , n\}$ such that $|A_i \cap A_j | \ne 1$ for all $1 \le i, j \le k$ . Determine all $n$ for which there are $n$ such that these subsets exist.
