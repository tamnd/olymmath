---
tag: 4G6GAFNJ52
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232536
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 20 towns on the bay of a circular island. Each town has 20 teams for a mathematical duel. No two of these teams are of equal strength. When two teams meet in a duel, the stronger one wins. For a given number $n\in \mathbb{N}$ one town $A$ can be called *"n-stronger"* than $B$, if there exist $n$ different duels between a team from $A$ and team from $B$, for which the team from $A$ wins. Find the maximum value of $n$, for which it is possible for each town to be *n-stronger* by its neighboring one clockwise.
