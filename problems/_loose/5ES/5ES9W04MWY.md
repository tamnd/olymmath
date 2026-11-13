---
tag: 5ES9W04MWY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791489
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=169
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
A sequence of pairwise distinct positive integers is called averaging if each term after the first two is the average of the previous two terms. Let $M$ be the maximum possible number of terms in an averaging sequence in which every term is less than or equal to $2022$ and let $N$ be the number of such distinct sequences (every term less than or equal to $2022$ ) with exactly $M$ terms. What is $M+N?$ (Two sequences $a_1, a_2, \cdots, a_n$ and $b_1, b_2, \cdots, b_n$ are said to be distinct if $a_i \neq b_i$ for some integer $1 \leq i \leq n$ ).

*Proposed by Kyle Lee*
