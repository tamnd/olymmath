---
tag: 3XC4AVMPTY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h2828123
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2022
    source: hf-ai-mo-aops
    label: 2022 Kazakhstan National Olympiad
---
Given an infinite positive integer sequence $\{x_i\}$ such that $$ x_{n+2}=x_nx_{n+1}+1 $$ Prove that for any positive integer $i$ there exists a positive integer $j$ such that $x_j^j$ is divisible by $x_i^i$ .

*Remark: Unfortunately, there was a mistake in the problem statement during the contest itself. In the last sentence, it should say "for any positive integer $i>1$ ..."*
