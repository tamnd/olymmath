---
tag: YHSJCS4FKY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are n chess players participating in a chess tournament, with each pair of players competing in one match. The rules stipulate that the winner gets 1 point, the loser gets 0 points, and in the case of a draw, each player gets 0.5 points. If it is found after the tournament that among any m players, there is one player who has won against the other m-1 players, and there is also one player who has lost to the other m-1 players, this situation is said to have property P(m). For a given m (m ≥ 4), find the minimum value of n, denoted as f(m), such that for any tournament with property P(m), all n players have distinct scores.
