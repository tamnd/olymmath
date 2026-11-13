---
tag: ZME886ND7D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3283892
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1624
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2024
    source: hf-ai-mo-aops
    label: 2024 China Team Selection Test
  - at: cn-tst
    source: hf-mathnet
    label: China The 65th IMO China National Team Selection Test
---
For a positive integer $n$ and a subset $S$ of $\{1, 2, \dots, n\}$ , let $S$ be " $n$ -good" if and only if for any $x$ , $y\in S$ (allowed to be same), if $x+y\leq n$ , then $x+y\in S$ . Let $r_n$ be the smallest real number such that for any positive integer $m\leq n$ , there is always a $m$ -element " $n$ -good" set, so that the sum of its elements is not more than $m\cdot r_n$ . Prove that there exists a real number $\alpha$ such that for any positive integer $n$ , $|r_n-\alpha n|\leq 2024.$
