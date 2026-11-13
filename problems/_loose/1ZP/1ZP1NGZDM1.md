---
tag: 1ZP1NGZDM1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h590968
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73862
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2001
    source: hf-ai-mo-aops
    label: 2001 Stanford Mathematics Tournament
---
Christopher and Robin are playing a game in which they take turns tossing a circular token of diameter 1 inch onto an inﬁnite checkerboard whose squares have sides of 2 inches. If the token lands entirely in a square, the player who tossed the token gets 1 point; otherwise, the other player gets 1 point. A player wins as soon as he gets two more points than the other player. If Christopher tosses ﬁrst, what is the probability that he will win? Express your answer as a fraction.
