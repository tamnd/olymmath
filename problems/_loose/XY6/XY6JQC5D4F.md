---
tag: XY6JQC5D4F
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185393
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
\section*{Task 2 - 291022}

Two players have come up with the following game:

On a game board, 8 fields are arranged in a circle, one of these fields is designated as the starting field A. Each player has a game piece and places it on field A.

Then each player rolls a die.

If both players roll different numbers, the player with the higher number moves their piece two steps clockwise, and the other player moves their piece one step.

This movement of both pieces is considered one move.

If both players roll the same number, no move is made, and they roll again. Due to the circular arrangement of the fields, it is possible for a piece to reach or pass field A (and thus start a new lap).

The game is over as soon as after performing a move, one player's piece lands exactly on field A.

This player wins if the other player's piece is not on A.

However, if both pieces are on A, the game ends in a draw.

What is the smallest possible number of moves in which a game can end in a draw?

Justify your answer!
