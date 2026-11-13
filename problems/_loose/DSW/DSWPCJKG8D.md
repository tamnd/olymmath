---
tag: DSWPCJKG8D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h2684909
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53868
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247527
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2024
    source: hf-ai-mo-aops
    label: 2024 Romania EGMO TST
---
Find the greatest positive integer $n$ such that there exist positive integers $a_1, a_2, ..., a_n$ for which the following holds $a_{k+2} = \dfrac{(a_{k+1}+a_k)(a_{k+1}+1)}{a_k}$ for all $1 \le k \le n-2$ .
*Proposed by Mykhailo Shtandenko and Oleksii Masalitin*
