---
tag: M2H06NJ7NT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h2494018
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2020
    source: hf-ai-mo-aops
    label: 2020 Brazil National Olympiad
---
Let $k$ be a positive integer. Arnaldo and Bernaldo play a game in a table $2020\times 2020$ , initially all the cells are empty. In each round a player chooses a empty cell and put one red token or one blue token, Arnaldo wins if in some moment, there are $k$ consecutive cells in the same row or column with tokens of same color, if all the cells have a token and there aren't $k$ consecutive cells(row or column) with same color, then Bernaldo wins. If the players play alternately and Arnaldo goes first, determine for which values of $k$ , Arnaldo has the winning strategy.
