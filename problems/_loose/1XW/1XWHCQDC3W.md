---
tag: 1XWHCQDC3W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3123173
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2023
    source: hf-ai-mo-aops
    label: 2023 South East Mathematical Olympiad
---
Let ${n}$ be a fixed positive integer. ${A}$ and ${B}$ play the following game: $2023$ coins marked $1, 2, \dots, 2023$ lie on a circle (the marks are considered in module $2023$ ) and each coin has two sides. Initially, all coins are head up and ${A}$ 's goal is to make as many coins with tail up. In each operation, ${A}$ choose two coins marked ${k}$ and $k+3$ with head up (if ${A}$ can't choose, the game ends) and ${B}$ choose a coin marked $k+1$ or $k+2$ and flip it. If at some moment there are ${n}$ coins with tail up, ${A}$ wins. Find the largest ${n}$ such that ${A}$ has a winning strategy.
