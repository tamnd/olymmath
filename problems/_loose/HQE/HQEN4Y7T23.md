---
tag: HQEN4Y7T23
kind: problem
type: answer
answer: A
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102777
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer no less than 3, and write it on the blackboard as the initial value. Two players, A and B, take turns to modify the number on the blackboard. A can add 3 or subtract 1 each time, while B can add 2 or subtract 2 each time. When someone writes $k$, such that $|k-n| \geqslant n$, the player wins and the game ends. If a number written in the current round has appeared before in the same round, it is a draw. If a draw occurs, the next round starts with the initial value being 1 less than the initial value of the previous round. B decides who goes first in the first round, and in subsequent rounds (if any), the player who was supposed to go next but did not in the previous round goes first. Question: Who has a winning strategy?
