---
tag: RB9Y0WCZX6
kind: problem
appearances:
  - at: pumac/2023/na3
    primary: true
  - at: pumac/2023/nb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3435006
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73449
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call an arrangement of $n$ not necessarily distinct nonnegative integers in a circle *wholesome* when, for any subset of the integers such that no pair of them is adjacent in the circle, their average is an integer. Over all wholesome arrangements of $n$ integers where at least two of them are distinct, let $M(n)$ denote the smallest possible value for the maximum of the integers in the arrangement. What is the largest integer $n < 2023$ such that $M(n+1)$ is strictly greater than $M(n)$ ?
