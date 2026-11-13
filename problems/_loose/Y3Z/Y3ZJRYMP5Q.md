---
tag: Y3ZJRYMP5Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h516868
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9654
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211648
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2013
    source: hf-ai-mo-aops
    label: 2013 International Zhautykov Olympiad
---
Find all odd positive integers $n>1$ such that there is a permutation $a_1, a_2, a_3, \ldots, a_n$ of the numbers $1, 2,3, \ldots, n$ where $n$ divides one of the numbers $a_k^2 - a_{k+1} - 1$ and $a_k^2 - a_{k+1} + 1$ for each $k$ , $1 \leq k \leq n$ (we assume $a_{n+1}=a_1$ ).
