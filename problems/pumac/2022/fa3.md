---
tag: 82RHNNCWXX
kind: problem
appearances:
  - at: pumac/2022/fa3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Indiv_Finals_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3152727
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. We call a $n$ -tuple $(a_1, . . . , a_n)$ of positive integers *nice* if $\bullet$ $gcd (a_1, . . . , a_n) = 1$ , and $\bullet$ $a_i|a_{i-1} + a_{i+1}$ , for all $i = 1, . . . , n$ (we define $a_0 = a_n$ and $a_{n+1} = a1$ here).
Find the maximal possible value of the sum $a_1 +...+ a_n$ if $(a_1, . . . , a_n)$ is a nice $n$ -tuple.
