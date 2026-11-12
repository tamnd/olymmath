---
tag: VNTXX5G0HY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1918641
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2017
    source: hf-ai-mo-aops
    label: 2017 Princeton University Math Competition
---
Define the sequences $a_n$ and $b_n$ as follows: $a_1 = 2017$ and $b_1 = 1$ .
For $n > 1$ , if there is a greatest integer $k > 1$ such that $a_n$ is a perfect $k$ th power, then $a_{n+1} =\sqrt[k]{a_n}$ , otherwise $a_{n+1} = a_n + b_n$ . If $a_{n+1} \ge a_n$ then $b_{n+1} = b_n$ , otherwise $b_{n+1} = b_n + 1$ . Find $a_{2017}$ .
