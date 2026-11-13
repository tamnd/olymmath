---
tag: FV5RMCSDEM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104031
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ players participating in a chess tournament, with the scoring method being: the winner of each game gets 2 points, the loser gets 0 points, and in the case of a draw, both players get 1 point. Midway through the tournament, the player with the highest score has $k$ points.

Prove that at this point, there is at least one player who has played no more than $k$ games.
