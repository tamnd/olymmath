---
tag: K1YDAYNGVA
kind: problem
type: answer
answer: Quintijn
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Johan and Quintijn play the following game.
Before the start of the game, the integers $1$, $2$, $\ldots$, $2024$ are written on a board. The players then each take turns, starting with Johan. On their turn a player must wipe out two integers $a$ and $b$ from the board and write their (possibly negative) difference $a - b$ on the board. The game ends when only one integer is left on the board. If this integer is divisible by $3$, Johan wins, otherwise Quintijn wins.
Determine which of the two players has a winning strategy.
