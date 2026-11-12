---
tag: VA9K5RT15R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h616804
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2014
    source: hf-ai-mo-aops
    label: 2014 Costa Rica - Final Round
---
There are 2014 houses in a circle. Let $A$ be one of these houses. Santa Claus enters house $A$ and leaves a gift. Then with probability $1/2$ he visits $A$ 's left neighbor and with probability $1/2$ he visits $A$ 's right neighbor. He leaves a gift also in that second house, and then repeats the procedure (visits with probability $1/2$ either of the neighbors, leaves a gift, etc). Santa finishes as soon as every house has received at least one gift.
Prove that any house $B$ different from $A$ has a probability of $1/2013$ of being the last house receiving a gift.
