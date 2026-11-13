---
tag: V2HPMRNEN9
kind: problem
type: answer
answer: \text{Kelvin can win.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220045
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Kelvin the Frog and Alex the Kat are playing a game on an initially empty blackboard. Kelvin begins by writing a digit. Then, the players alternate inserting a digit anywhere into the number currently on the blackboard, including possibly a leading zero (e.g. $12$ can become $123$, $142$, $512$, $012$, etc.). Alex wins if the blackboard shows a perfect square at any time, and Kelvin's goal is prevent Alex from winning. Does Alex have a winning strategy?
