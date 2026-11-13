---
tag: JBYNNC27GV
kind: problem
type: answer
answer: n \equiv 1, 4 \pmod{5}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ cards. Max and Lewis play, alternately, the following game
Max starts the game, he removes exactly $1$ card, in each round the current player can remove any quantity of cards, from $1$ card to $t+1$ cards, which $t$ is the number of removed cards by the previous player, and the winner is the player who remove the last card. Determine all the possible values of $n$ such that Max has the winning strategy.
