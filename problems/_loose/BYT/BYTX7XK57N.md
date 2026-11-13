---
tag: BYTX7XK57N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two students $A$ and $B$ play a game on a $20 \text{ x } 20$ chessboard. It is known that two squares are said to be *adjacent* if the two squares have a common side. At the beginning, there is a chess piece in a certain square of the chessboard. Given that $A$ will be the first one to move the chess piece, $A$ and $B$ will alternately move this chess piece to an adjacent square. Also, the common side of any pair of adjacent squares can only be passed once. If the opponent cannot move anymore, then he will be declared the winner (to clarify since the wording wasn't that good, you lose if you can't move). Who among $A$ and $B$ has a winning strategy? Justify your claim.
