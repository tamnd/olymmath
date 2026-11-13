---
tag: 4TZRFE0YC5
kind: problem
type: answer
answer: All positive integers n except 1, 2, 4, 6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer, and write down $1, 2, \dots, n$ on the blackboard. Alpha and Lee take turn choosing a number from the board according to the following rules:
(i) You cannot choose any number that was previous selected by either player.
(ii) If you have chosen $k$, you cannot choose $k-1$ or $k+1$.
(iii) The game is a draw if all numbers are chosen. Otherwise, the player who cannot choose any number first loses the game.
Suppose Alpha chooses first. Determine all $n$ such that Lee has a winning strategy.
