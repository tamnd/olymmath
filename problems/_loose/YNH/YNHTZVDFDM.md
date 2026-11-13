---
tag: YNHTZVDFDM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h1238168
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12425
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101379
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2015
    source: hf-ai-mo-aops
    label: 2015 China Second Round Olympiad
---
Given positive integers $m,n(2\le m\le n)$ , let $a_1,a_2,\ldots ,a_m$ be a permutation of any $m$ pairwise distinct numbers taken from $1,2,\ldots ,n$ . If there exist $k\in\{1,2,\ldots ,m\}$ such that $a_k+k$ is odd, or there exist positive integers $k,l(1\le k<l\le m)$ such that $a_k>a_l$ , then call $a_1,a_2,\ldots ,a_m$ a *good* sequence. Find the number of good sequences.
