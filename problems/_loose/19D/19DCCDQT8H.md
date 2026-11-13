---
tag: 19DCCDQT8H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90291
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=235
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of numbers $1,2,3, \ldots, 100$ is written on the blackboard. Between each two consecutive numbers a square box is drawn. Player $A$ starts the game and the players $A$ and $B$ alternate the moves. In each turn a player choses an empty box and places "+" or "." sign in it. After all the boxes are filled the expression on the blackboard is evaluated and if the result is an odd number the winner is $A$. Otherwise the winner is $B$. Determine which of the players has a winning strategy and what the strategy is.
