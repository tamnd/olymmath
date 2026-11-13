---
tag: DVA0K30XTV
kind: problem
type: answer
answer: "-1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three. (50 points)
Given a positive integer $m \geqslant 17$, there are $2 m$ players participating in a round-robin tournament. Each round, the $2 m$ players are divided into $m$ pairs, with each pair competing against each other. In the next round, the players are re-paired, and this continues for a total of $2 m-1$ rounds, ensuring that each player competes against each of the other $2 m-1$ players exactly once.

Find the smallest possible positive integer $n$ such that there exists a feasible schedule after a few rounds, where for any 4 players, they have either not competed against each other at all or have competed against each other at least twice.
