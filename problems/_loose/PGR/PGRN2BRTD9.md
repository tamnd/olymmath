---
tag: PGRN2BRTD9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3275595
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2024
    source: hf-ai-mo-aops
    label: 2024 China Team Selection Test
---
There is number $1$ on the blackboard initially. The first step is to erase $1$ and write two nonnegative reals whose sum is $1$ . Call the smaller number of the two $L_2$ .
For integer $k \ge 2$ , the ${k}$ the step is to erase a number on the blackboard arbitrarily and write two nonnegative reals whose sum is the number erased just now. Call the smallest number of the $k+1$ on the blackboard $L_{k+1}$ .
Find the maximum of $L_2+L_3+\cdots+L_{2024}$ .
