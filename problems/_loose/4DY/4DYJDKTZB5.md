---
tag: 4DYJDKTZB5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83881
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cube with a side of 3 is divided into 27 unit cubes. These small cubes are each randomly assigned a number between 1 and 27, with each number being assigned only once. The game is played as follows: at each step, the cube numbered 27 can be swapped with one of its neighbors. Is it possible to play in such a way that the cube 27 returns to its original position and, for every $n$ between 1 and 26, the cube $n$ has swapped places with the cube $27-n$?
