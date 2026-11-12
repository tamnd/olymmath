---
tag: ZVSYH7V2DR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h595551
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2014
    source: hf-ai-mo-aops
    label: 2014 Singapore Senior Math Olympiad
---
Alice and Bob play a number game. Starting with a positive integer $n$ they take turns changing the number with Alice going first. Each player may change the current number $k$ to either $k-1$ or $\lceil k/2\rceil$ . The person who changes $1$ to $0$ wins. Determine all $n$ such that Alice has a winning strategy.
