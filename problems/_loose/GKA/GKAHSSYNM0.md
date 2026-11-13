---
tag: GKAHSSYNM0
kind: problem
type: answer
answer: (1,1,1) and all permutations of (1,2,3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=90
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Find all triples $(a, b, c)$ of positive integers such that
$$
a^{bc} + b^{ca} + c^{ab} = 3abc.
$$
