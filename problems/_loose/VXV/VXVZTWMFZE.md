---
tag: VXVZTWMFZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h1374842
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2017
    source: hf-ai-mo-aops
    label: 2017 CMIMC Team
---
We have four registers, $R_1,R_2,R_3,R_4$ , such that $R_i$ initially contains the number $i$ for $1\le i\le4$ . We are allowed two operations:

- Simultaneously swap the contents of $R_1$ and $R_3$ as well as $R_2$ and $R_4$ .
- Simultaneously transfer the contents of $R_2$ to $R_3$ , the contents of $R_3$ to $R_4$ , and the contents of $R_4$ to $R_2$ . (For example if we do this once then $(R_1,R_2,R_3,R_4)=(1,4,2,3)$ .)

Using these two operations as many times as desired and in whatever order, what is the total number of possible outcomes?
