---
tag: WCA81H2CW3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players play tic-tac-toe on a $10 \times 10$ board according to the following rules. First, they fill the board with crosses and noughts, placing them alternately (the player who starts the game places crosses, his partner - noughts). Then two numbers are counted: $\mathrm{K}$ - the number of sequences of five consecutive crosses and $\mathrm{H}$ - the number of sequences of five consecutive noughts. (Sequences of five are counted horizontally, vertically, and parallel to the diagonal; if six crosses stand in a row, this counts as two sequences of five, if seven, then three, and so on.) The number $K-\mathrm{H}$ is considered the first player's win (the second player's loss).

a) Does the first player have a non-losing strategy?

b) Does he have a winning strategy?
