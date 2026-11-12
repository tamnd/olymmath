---
tag: M6SEJ3WM8B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h487593
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2012
    source: hf-ai-mo-aops
    label: 2012 Stanford Mathematics Tournament
---
Let $X_1$ , $X_2$ , ..., $X_{2012}$ be chosen independently and uniformly at random from the interval $(0,1]$ . In other words, for each $X_n$ , the probability that it is in the interval $(a,b]$ is $b-a$ . Compute the probability that $\lceil\log_2 X_1\rceil+\lceil\log_4 X_2\rceil+\cdots+\lceil\log_{1024} X_{2012}\rceil$ is even. (Note: For any real number $a$ , $\lceil a \rceil$ is defined as the smallest integer not less than $a$ .)
