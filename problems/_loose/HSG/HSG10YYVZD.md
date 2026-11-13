---
tag: HSG10YYVZD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Twenty players participated in a chess tournament. Each player faced every other player exactly once, and each game ended with one of the players winning or in a draw. In this tournament, it was noted that for each game that ended in a draw, each of the other 18 players won at least one of the two players involved in it. We also know that at least two games ended in a draw. Show that it is possible to name the players as $P_{1}, P_{2}, \ldots, P_{20}$ such that player $P_{k}$ beat player $P_{k+1}$, for each $k \in\{1,2,3, \ldots, 19\}$.
