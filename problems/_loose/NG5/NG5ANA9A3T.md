---
tag: NG5ANA9A3T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56723
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rockefeller and Marx are playing a game. There are $n>1$ cities, each with the same number of residents.

Initially, each resident has exactly one coin (the coins are identical). On a turn, Rockefeller selects one resident from each city, and Marx redistributes their money in any way, with the only condition that the distribution must not remain the same as it was just before. Rockefeller wins if at some point there is at least one person without money in each city. Prove that Rockefeller can always win, regardless of how Marx plays, if in each city

a) there are exactly $2 n$ residents;

b) there are exactly $2 n-1$ residents.
