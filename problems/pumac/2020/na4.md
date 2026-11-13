---
tag: 1YZ8NAYZZ9
kind: problem
appearances:
  - at: pumac/2020/na4
    primary: true
  - at: pumac/2020/nb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/PuMaC_Number_Theory_A_2020.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747859
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73236
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two positive integers $a \ne b$ , let $f(a, b)$ be the smallest integer that divides exactly one of $a, b$ , but not both. Determine the number of pairs of positive integers $(x, y)$ , where $x \ne y$ , $1\le x, y, \le 100$ and $\gcd(f(x, y), \gcd(x, y)) = 2$ .
