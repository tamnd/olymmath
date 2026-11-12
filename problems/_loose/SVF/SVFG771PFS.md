---
tag: SVFG771PFS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1301936
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Iran MO (3rd Round)
---
A $100 \times 100$ table is given. At the beginning, every unit square has number $"0"$ written in them. Two players playing a game and the game stops after $200$ steps (each player plays $100$ steps).

In every step, one can choose a row or a column and add $1$ to the written number in all of it's squares $\pmod 3.$ First player is the winner if more than half of the squares ( $5000$ squares) have the number $"1"$ written in them,
Second player is the winner if more than half of the squares ( $5000$ squares) have the number $"0"$ written in them. Otherwise, the game is draw.

Assume that both players play at their best. What will be the result of the game ?

*Proposed by Mahyar Sefidgaran*
