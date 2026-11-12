---
tag: X6QF4BA32K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h365394
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4754
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
Assume real numbers $a_i,b_i\,(i=0,1,\cdots,2n)$ satisfy the following conditions:
(1) for $i=0,1,\cdots,2n-1$ , we have $a_i+a_{i+1}\geq 0$ ;
(2) for $j=0,1,\cdots,n-1$ , we have $a_{2j+1}\leq 0$ ;
(2) for any integer $p,q$ , $0\leq p\leq q\leq n$ , we have $\sum_{k=2p}^{2q}b_k>0$ .
Prove that $\sum_{i=0}^{2n}(-1)^i a_i b_i\geq 0$ , and determine when the equality holds.
