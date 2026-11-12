---
tag: N94XT0RHQ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2840889
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44999
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2022
    source: hf-ai-mo-aops
    label: 2022 Irish Math Olympiad
---
Let *n* $\ge$ 3 be an integer and let (*$p_1$*, *$p_2$*, *$p_3$*, $\dots$ , *$p_n$*) be a permutation of {1, 2, 3, $\dots$ *n*}. For this permutation we say that *$p_t$* is a *turning point* if 2 $\le$ *t* $\le$ *n*-1 and

(*$p_t$* - *$p_{t-1}$*)(*$p_t$* - *$p_{t+1}$*) > 0

For example, for *n* = 8, the permutation (2, 4, 6, 7, 5, 1, 3, 8) has two turning points: *$p_4$* = 7 and *$p_6$* = 1.

For fixed *n*, let *q*(*n)* denote the number of permutations of {1, 2, 3, $\dots$ *n*} with exactly one turning point. Find all *n* $\ge$ 3 for which *q*(*n)* is a perfect square.
