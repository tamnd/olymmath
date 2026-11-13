---
tag: TNMA82AK7W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,a_2,\cdots$ be a strictly increasing sequence on positive integers.

Is it always possible to partition the set of natural numbers $\mathbb{N}$ into infinitely many subsets with infinite cardinality $A_1,A_2,\cdots$, so that for every subset $A_i$, if we denote $b_1<b_2<\cdots$ be the elements of $A_i$, then for every $k\in \mathbb{N}$ and for every $1\le i\le a_k$, it satisfies $b_{i+1}-b_{i}\le k$?
