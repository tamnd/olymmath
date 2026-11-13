---
tag: 6N2HDVZWZV
kind: problem
type: answer
answer: 3^{n-1}-2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88852
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a football club, there are $n$ players who have jerseys with mutually distinct numbers from 1 to $n$. At the end of the season, the player with number 1 retires. The management selects one of the remaining players to sell to another club, while the remaining $n-2$ players receive jerseys with mutually distinct numbers from 1 to $n$.

In how many ways can the management select a player to sell and assign numbers to the remaining players such that no player has a higher number than the one they had this season?
