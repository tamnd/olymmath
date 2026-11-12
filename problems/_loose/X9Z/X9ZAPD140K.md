---
tag: X9ZAPD140K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h86777
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22956
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1994
    source: hf-ai-mo-aops
    label: 1994 IberoAmerican
---
Let $n$ and $r$ two positive integers. It is wanted to make $r$ subsets $A_1,\ A_2,\dots,A_r$ from the set $\{0,1,\cdots,n-1\}$ such that all those subsets contain exactly $k$ elements and such that, for all integer $x$ with $0\leq{x}\leq{n-1}$ there exist $x_1\in{}A_1,\ x_2\in{}A_2 \dots,x_r\in{}A_r$ (an element of each set) with $x=x_1+x_2+\cdots+x_r$ .

Find the minimum value of $k$ in terms of $n$ and $r$ .
