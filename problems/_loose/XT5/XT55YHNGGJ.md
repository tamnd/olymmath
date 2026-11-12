---
tag: XT55YHNGGJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h3281099
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Costa Rica - Final Round
---
Given a positive integer $N$ , define $u(N)$ as the number obtained by making the ones digit the left-most digit of $N$ , that is, taking the last, right-most digit (the ones digit) and moving it leftwards through the digits of $N$ until it becomes the first (left-most) digit; for example, $u(2023) = 3202$ .**(1)** Find a $6$ -digit positive integer $N$ such that
$$\frac{u(N)}{N} = \frac{23}{35}.$$**(2)** Prove that there is no positive integer $N$ with less than $6$ digits such that
$$\frac{u(N)}{N} = \frac{23}{35}.$$
