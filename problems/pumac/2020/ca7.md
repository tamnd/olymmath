---
tag: JSZJHPMEMR
kind: problem
appearances:
  - at: pumac/2020/ca7
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
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747892
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be defined as below for integers $n \ge 0$ and $a_0, a_1, ...$ such that $\sum_{i\ge 0}a_i$ is finite: $$ f(n; a_0, a_1, ...) = \begin{cases} a_{2020}, & \text{ $n = 0$ }
\sum_{i\ge 0} a_i f(n-1;a_0,...,a_{i-1},a_i-1,a_{i+1}+1,a_{i+2},...)/ \sum_{i\ge 0}a_i & \text{ $n > 0$ } \end{cases} $$ .
Find the nearest integer to $f(2020^2; 2020, 0, 0, ...)$ .
