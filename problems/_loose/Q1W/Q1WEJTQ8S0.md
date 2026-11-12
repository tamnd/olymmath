---
tag: Q1WEJTQ8S0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2023
    url: https://artofproblemsolving.com/community/c6h3230632
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2023
    source: hf-ai-mo-aops
    label: Kvant 2023
---
Let $p{}$ be a prime number. There are $p{}$ integers $a_0,\ldots,a_{p-1}$ around a circle. In one move, it is allowed to select some integer $k{}$ and replace the existing numbers via the operation $a_i\mapsto a_i-a_{i+k}$ where indices are taken modulo $p{}.$ Find all pairs of natural numbers $(m, n)$ with $n>1$ such that for any initial set of $p{}$ numbers, after performing any $m{}$ moves, the resulting $p{}$ numbers will all be divisible by $n{}.$ *Proposed by P. Kozhevnikov*
