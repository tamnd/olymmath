---
tag: HBJWWPAYTV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250791
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of permutations $ ( a_1, a_2, . \ . \ , a_{2016}) $ of the first $ 2016 $ positive integers satisfying the following two
conditions:

1. $ a_{i+1} - a_i \leq 1$ for all $i = 1, 2, . \ . \ . , 2015$, and
2. There are exactly two indices $ i < j $ with $ 1 \leq i < j \leq 2016 $ such that $ a_i = i $
and $ a_j = j$.
