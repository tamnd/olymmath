---
tag: BB1HF8KMM2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261754
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You are given the existence of an unsorted sequence $a_1,\ldots, a_5$ of five distinct real numbers. The Erdos-Szekeres theorem states that there exists a subsequence of length $3$ which is either strictly increasing or strictly decreasing. You do not have access to the $a_i$, but you do have an oracle which, when given two indexes $1\leq i < j\leq 5$, will tell you whether $a_i < a_j$ or $a_i > a_j$. What is the minimum number of calls to the oracle needed in order to identify an ordered triple of integers $(r,s,t)$ such that $a_r,a_s,a_t$ is one such sequence?
