---
tag: 5FBKWB7W80
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h2468225
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20554
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan Mathematics Olympiad
---
Let $n$ be a given positive integer. Alice and Bob play a game. In the beginning, Alice determines an integer polynomial $P(x)$ with degree no more than $n$ . Bob doesn't know $P(x)$ , and his goal is to determine whether there exists an integer $k$ such that no integer roots of $P(x) = k$ exist.

In each round, Bob can choose a constant $c$ . Alice will tell Bob an integer $k$ , representing the number of integer $t$ such that $P(t) = c$ . Bob needs to pay one dollar for each round. Find the minimum cost such that Bob can guarantee to reach his goal.

*Proposed by ltf0501*
