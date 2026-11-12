---
tag: 4G1NDT04PC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Argentina National Olympiad Level 2
    url: https://artofproblemsolving.com/community/c6h3468071
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2013
    source: hf-ai-mo-aops
    label: 2013 Argentina National Olympiad Level 2
---
There are several coins in a row, and the *allowed move* is to remove exactly one coin from the row, which can either be the first or the last. In the initial distribution, there are $n$ coins with not necessarily equal values. Ana and María alternate turns. Ana starts, making two moves, then María makes one move, then Ana makes two moves, and so on until no coins remain: Ana makes two moves and María makes one. (Only in the last move can Ana take one coin if only one coin is left.) Ana's goal is to ensure she takes at least $\dfrac{2}{3}$ of the total value of the coins.

Determine if Ana can achieve her goal with certainty if

- $n=2013$
- $n=2014$

If the answer is yes, provide a strategy to achieve it; if the answer is no, give a specific sequence of coins and explain how María prevents Ana from achieving her goal.
