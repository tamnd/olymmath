---
tag: D5F0DBMMJW
kind: problem
appearances:
  - at: pumac/2022/na3
    primary: true
  - at: pumac/2022/nb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444981
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $k \ge 1,$ let $p_k$ denote the $k$ -th smallest prime number. If $N$ is the number of ordered $4$ -tuples $(a,b,c,d)$ of positive integers satisfying $abcd=\prod_{k=1}^{2023} p_k$ with $a<b$ and $c<d,$ find $N \pmod{1000}.$
