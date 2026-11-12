---
tag: AN06ZZ2HQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h80882
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1993
    source: hf-ai-mo-aops
    label: 1993 IMO Shortlist
---
Let $n \geq 2, n \in \mathbb{N}$ and $A_0 = (a_{01},a_{02}, \ldots, a_{0n})$ be any $n-$ tuple of natural numbers, such that $0 \leq a_{0i} \leq i-1,$ for $i = 1, \ldots, n.$
$n-$ tuples $A_1= (a_{11},a_{12}, \ldots, a_{1n}), A_2 = (a_{21},a_{22}, \ldots, a_{2n}), \ldots$ are defined by: $a_{i+1,j} = Card \{a_{i,l}| 1 \leq l \leq j-1, a_{i,l} \geq a_{i,j}\},$ for $i \in \mathbb{N}$ and $j = 1, \ldots, n.$ Prove that there exists $k \in \mathbb{N},$ such that $A_{k+2} = A_{k}.$
