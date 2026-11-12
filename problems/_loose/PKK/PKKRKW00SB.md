---
tag: PKKRKW00SB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h3301580
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1799
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2024
    source: hf-ai-mo-aops
    label: 2024 Iran MO (2nd Round)
---
Find all sequences $(a_n)_{n\geq 1}$ of positive integers such that for all integers $n\geq 3$ we have $$ \dfrac{1}{a_1 a_3} + \dfrac{1}{a_2a_4} + \cdots
+ \dfrac{1}{a_{n-2}a_n}= 1 - \dfrac{1}{a_1^2+a_2^2+\cdots +a_{n-1}^2}. $$ Proposed by Mojtaba Zareh
