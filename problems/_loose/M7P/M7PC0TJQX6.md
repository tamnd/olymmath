---
tag: M7PC0TJQX6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h514377
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55736
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1999
    source: hf-ai-mo-aops
    label: 1999 All-Russian Olympiad
---
Find all bounded sequences $(a_n)_{n=1}^\infty$ of natural numbers such that for all $n \ge 3$ , $$ a_n = \frac{a_{n-1} + a_{n-2}}{\gcd(a_{n-1}, a_{n-2})}. $$
