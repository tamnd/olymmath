---
tag: F46P5BVPZV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Israel National Olympiad (Gillis)
    url: https://artofproblemsolving.com/community/c6h3452305
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: il-gillis/2025
    source: hf-ai-mo-aops
    label: 2025 Israel National Olympiad (Gillis)
---
For a positive integer $n$ , let $A_n$ be the set of quadruplets $(a,b,c,d)$ of integers, satisfying the following properties simultaneously:

- $0\le a\le c\le n,$
- $0\le b\le d\le n,$
- $c+d>n,$ and
- $bc=ad+1.$

Moreover, define $$ \alpha_n=\sum_{(a,b,c,d)\in A_n}\frac{1}{ab+cd}. $$ Find all real numbers $t$ such that $\alpha_n>t$ for every positive integer $n$ .
