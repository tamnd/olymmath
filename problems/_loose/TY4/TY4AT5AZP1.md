---
tag: TY4AT5AZP1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3540502
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2025
    source: hf-ai-mo-aops
    label: 2025 Romania National Olympiad
---
Let $N \geq 1$ be a positive integer. There are two numbers written on a blackboard, one red and one blue. Initially, both are 0. We define the following procedure: at each step, we choose a nonnegative integer $k$ (not necessarily distinct from the previously chosen ones), and, if the red and blue numbers are $x$ and $y$ respectively, we replace them with $x+k+1$ and $y+k^2+2$ , which we color blue and red (in this order). We keep doing this procedure until the blue number is at least $N$ .
Determine the minimum value of the red number at the end of this procedure.
