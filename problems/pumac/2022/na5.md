---
tag: PEV2F84S7Q
kind: problem
appearances:
  - at: pumac/2022/na5
    primary: true
  - at: pumac/2022/nb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2022 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2022_.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3444985
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73391
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $\ell \ge 2$ is called *sweet* if there exists a positive integer $n \ge 10$ such that when the leftmost nonzero decimal digit of $n$ is deleted, the resulting number $m$ satisfies $n = m\ell.$ Let $S$ denote the set of all sweet numbers $\ell.$ If the sum $\sum_{\ell \in S} \tfrac{1}{\ell-1}$ can be written as $\tfrac{A}{B}$ for relatively prime positive integers $A,B,$ find $A+B.$
