---
tag: P0WZ0E9B2C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022-23 IOQM India
    url: https://artofproblemsolving.com/community/c6h2950800
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2022
    source: hf-ai-mo-aops
    label: 2022-23 IOQM India
---
For an integer $n\ge 3$ and a permutation $\sigma=(p_{1},p_{2},\cdots ,p_{n})$ of $\{1,2,\cdots , n\}$ , we say $p_{l}$ is a $landmark$ point if $2\le l\le n-1$ and $(p_{l-1}-p_{l})(p_{l+1}-p_{l})>0$ . For example , for $n=7$ ,
the permutation $(2,7,6,4,5,1,3)$ has four landmark points: $p_{2}=7$ , $p_{4}=4$ , $p_{5}=5$ and $p_{6}=1$ . For a given $n\ge 3$ , let $L(n)$ denote the number of permutations of $\{1,2,\cdots ,n\}$ with exactly one landmark point. Find the maximum $n\ge 3$ for which $L(n)$ is a perfect square.
