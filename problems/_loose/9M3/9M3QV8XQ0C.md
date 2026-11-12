---
tag: 9M3QV8XQ0C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h364145
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2010
    source: hf-ai-mo-aops
    label: 2010 China Team Selection Test
---
Let $n_1,n_2, \cdots, n_{26}$ be pairwise distinct positive integers satisfying
(1) for each $n_i$ , its digits belong to the set $\{1,2\}$ ;
(2) for each $i,j$ , $n_i$ can't be obtained from $n_j$ by adding some digits on the right.
Find the smallest possible value of $\sum_{i=1}^{26} S(n_i)$ , where $S(m)$ denotes the sum of all digits of a positive integer $m$ .
