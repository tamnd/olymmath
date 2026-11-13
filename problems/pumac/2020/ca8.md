---
tag: 1CBFWN8T69
kind: problem
appearances:
  - at: pumac/2020/ca8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020__PUMaC_Combinatorics_A-2.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747887
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(k)$ denote the number of triples $(a, b, c)$ of positive integers satisfying $a + b + c = 2020$ with $(k - 1)$ not dividing $a, k$ not dividing $b$ , and $(k + 1)$ not dividing $c$ . Find the product of all integers $k$ in the range 3 \le k \le 20 such that $(k + 1)$ divides $f(k)$ .
