---
tag: K6QJ6GFJY9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3537714
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2025
    source: hf-ai-mo-aops
    label: 2025 China Team Selection Test
---
Let $ A $ be a set of 2025 positive real numbers. For a subset $ T \subseteq A $, define $ M_T $ as the median of $ T $ when all elements of $ T $ are arranged in increasing order, with the convention that $ M_\emptyset = 0 $. Define
$$
P(A) = \sum_{\substack{T \subseteq A |T| \text{ odd}}} M_T, Q(A) = \sum_{\substack{T \subseteq A |T| \text{ even}}} M_T.
$$
Find the smallest real number $ C $ such that for any set $ A $ of 2025 positive real numbers, the following inequality holds:
$$
P(A) - Q(A) \leq C \cdot \max(A),
$$
where $\max(A)$ denotes the largest element in $ A $.
