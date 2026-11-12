---
tag: DRMJWQ1TNW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2766614
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74014
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2018
    source: hf-ai-mo-aops
    label: 2018 Stanford Mathematics Tournament
---
Consider a game played on the integers in the closed interval $[1, n]$ . The game begins with some tokens placed in $[1, n]$ . At each turn, tokens are added or removed from $ [1, n]$ using the following rule: For each integer $k \in [1, n]$ , if exactly one of $k - 1$ and $k + 1$ has a token, place a token at $k$ for the next turn, otherwise leave k blank for the next turn.
We call a position *static* if no changes to the interval occur after one turn. For instance, the trivial position with no tokens is static because no tokens are added or removed after a turn (because there are no tokens). Find all non-trivial static positions.
