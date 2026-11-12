---
tag: DEKHPP4ZGN
kind: problem
type: answer
answer: "120"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14745
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a computer game, one person can play as one of three factions: $T, Z$ or $P$. There is a network play mode in which 8 players are divided into two teams of 4 players each. How many different matches can there be, differing in the sets of factions? Matches are considered different if one match has a team that the other does not. The order of the teams and the order of listing the factions in the team do not matter. For example, matches $(P Z P T ; T T Z P)$ and $(P Z T T ; T Z P P)$ are considered the same, while matches $(P Z P Z ; T Z P Z)$ and $(P Z P T ; Z Z P Z)$ are different.
