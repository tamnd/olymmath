---
tag: 660HQDYS7X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254138
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35775
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
$ n$ sets $ S_1$ , $ S_2$ $ \cdots$ , $ S_n$ consists of non-negative numbers. $ x_i$ is the sum of all elements of $ S_i$ , prove that there is a natural number $ k$ , $ 1<k<n$ , and:

$$ \sum_{i=1}^n x_i < \frac{1}{k+1} \left[ k \cdot \frac{n(n+1)(2n+1)}{6} - (k+1)^2 \cdot \frac{n(n+1)}{2} \right]$$
and there exists subscripts $ i$ , $ j$ , $ t$ , and $ l$ (at least $ 3$ of them are distinct) such that $ x_i + x_j = x_t + x_l$ .
