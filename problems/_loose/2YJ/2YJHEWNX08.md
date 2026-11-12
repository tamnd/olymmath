---
tag: 2YJHEWNX08
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h478286
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2009
    source: hf-ai-mo-aops
    label: 2009 Romania Team Selection Test
---
Given two integers $n\geq 1$ and $q\geq 2$ , let $A=\{(a_1,\ldots ,a_n):a_i\in\{0,\ldots ,q-1\}, i=1,\ldots ,n\}$ . If $a=(a_1,\ldots ,a_n)$ and $b=(b_1,\ldots ,b_n)$ are two elements of $A$ , let $\delta(a,b)=\#\{i:a_i\neq b_i\}$ . Let further $t$ be a non-negative integer and $B$ a non-empty subset of $A$ such that $\delta(a,b)\geq 2t+1$ , whenever $a$ and $b$ are distinct elements of $B$ . Prove that the two statements below are equivalent:
a) For any $a\in A$ , there is a unique $b\in B$ , such that $\delta (a,b)\leq t$ ;
b) $ |B|\cdot \sum_{k=0}^t \binom{n}{k}(q-1)^k=q^n$
