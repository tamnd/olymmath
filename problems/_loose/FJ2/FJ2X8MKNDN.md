---
tag: FJ2X8MKNDN
kind: problem
type: answer
answer: All even n with n ≥ 18
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland IRL_ABooklet
---
It is Ann's birthday. She, her brother Jim, and 8 of her friends sit around a table in the shape of a regular decagon (a 10-sided polygon). Jim sits directly opposite Ann at the table. The 10 children play a game called *throw the parcel*, which works as follows. At the beginning, Ann has the parcel. The game then consists of $n$ moves. In each move, the person who has the parcel throws it to a person sitting immediately beside them (their neighbour), or to a person sitting immediately beside their neighbour. Whoever has the parcel at the end wins the game.

Before the game begins, Ann says to Jim, "there are over a million more ways for the parcel to travel to end up with me than with you".

Determine, with proof, the values of $n$ for which Ann's claim is correct.
