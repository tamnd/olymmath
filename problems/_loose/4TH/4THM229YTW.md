---
tag: 4THM229YTW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n$ be a positive integer, and let $ M = \{1,2,\ldots, 2n\}$. Find the minimal positive integer $ m$, such that no matter how we choose the subsets $ A_i \subset M$, $ 1\leq i\leq m$, with the properties:

(1) $ |A_i-A_j|\geq 1$, for all $ i\neq j$,

(2) $ \bigcup_{i=1}^m A_i = M$,

we can always find two subsets $ A_k$ and $ A_l$ such that $ A_k \cup A_l = M$ (here $ |X|$ represents the number of elements in the set $ X$.)
