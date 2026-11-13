---
tag: YY35K94WZ7
kind: problem
appearances:
  - at: pumac/2020/fb1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020_Indiv_Finals_B.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747875
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of natural numbers $(n, k)$ with the following property:
Given a $k\times k$ array of cells, such that every cell contains one integer, there always exists a path from the left to the right edges such that the sum of the numbers on the path is a multiple of $n$ .

Note: A path from the left to the right edge is a sequence of cells of the array $a_1, a_2, ... , a_m$ so that $a_1$ is a cell of the leftmost column, $a_m$ is the cell of the rightmost column, and $a_{i}$ , $a_{i+1}$ share an edge for all $i = 1, 2, ... , m -1$ .
