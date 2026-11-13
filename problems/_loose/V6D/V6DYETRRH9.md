---
tag: V6DYETRRH9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h612403
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10460
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2013
    source: hf-ai-mo-aops
    label: 2013 Stanford Mathematics Tournament
---
Suppose two equally strong tennis players play against each other until one player wins three games in a row. The results of each game are independent, and each player will win with probability $\frac{1}{2}$ . What is the expected value of the number of games they will play?
