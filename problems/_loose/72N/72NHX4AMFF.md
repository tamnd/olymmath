---
tag: 72NHX4AMFF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022161
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28955
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2012 Tournament of Towns
---
A treasure is buried under a square of an $8\times 8$ board. Under each other square is a message which indicates the minimum number of steps needed to reach the square with the treasure. Each step takes one from a square to another square sharing a common side. What is the minmum number of squares we must dig up in order to bring up the treasure for sure?
