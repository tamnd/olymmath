---
tag: WEWSR7N3AD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1610165
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16348
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218012
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2018
    source: hf-ai-mo-aops
    label: 2018 Caucasus Mathematical Olympiad
---
Morteza places a function $[0,1]\to [0,1]$ (that is a function with domain [0,1] and values from [0,1]) in each cell of an $n \times n$ board. Pavel wants to place a function $[0,1]\to [0,1]$ to the left of each row and below each column (i.e. to place $2n$ functions in total) so that the following condition holds for any cell in this board:
If $h$ is the function in this cell, $f$ is the function below its column, and $g$ is the function to the left of its row, then $h(x) = f(g(x))$ for all $x \in [0, 1]$ .
Prove that Pavel can always fulfil his plan.
