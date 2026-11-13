---
tag: 49GA4SBTZM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1885860
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18388
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219954
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2019
    source: hf-ai-mo-aops
    label: 2019 South East Mathematical Olympiad
---
For positive integer n, define $a_n$ as the number of the triangles with integer length of every side and the length of the longest side being $2n.$ (1) Find $a_n$ in terms of $n;$ (2)If the sequence $\{ b_n\}$ satisfying for any positive integer $n,$ $\sum_{k=1}^n(-1)^{n-k}\binom {n}{k} b_k=a_n.$ Find the number of positive integer $n$ satisfying that $b_n\leq 2019a_n.$
