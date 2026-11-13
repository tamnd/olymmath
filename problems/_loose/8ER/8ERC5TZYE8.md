---
tag: 8ERC5TZYE8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
Arnold and Bernold play the following game in a $m \times n$ board: Arnold chooses one of its cells and places a knight on it. Then Bernold and Arnold move the knight alternately, with the condition that the knight visits a cell at most once. The player who is unable to move the knight loses. Determine, in terms of $m$ and $n$, which player has the winning strategy.

*Remark*: the knight always moves two cells in a row or a column and then one cell in the perpendicular direction.
