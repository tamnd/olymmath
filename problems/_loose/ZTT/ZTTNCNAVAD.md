---
tag: ZTTNCNAVAD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Baron and Peter are playing a game. They are given a simple finite graph $G$ with $n\ge 3$ vertex and $k$ edges that connects the vertices. First Peter labels two vertices A and B, and places a counter at A. Baron starts first. A move for Baron is move the counter along an edge. Peter's move is to remove an edge from the graph. Baron wins if he reaches $B$, otherwise Peter wins.

Given the value of $n$, what is the largest $k$ so that Peter can always win?
