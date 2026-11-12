---
tag: XDWNF0T0DX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3435011
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73451
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2023
    source: hf-ai-mo-aops
    label: 2023 Princeton University Math Competition
---
You play a game where you and an adversarial opponent take turns writing down positive integers on a chalkboard; the only condition is that, if $m$ and $n$ are written consecutively on the board, $\gcd(m,n)$ must be squarefree. If your objective is to make sure as many integers as possible that are strictly less than $404$ end up on the board (and your opponent is trying to minimize this quantity), how many more such integers can you guarantee will eventually be written on the board if you get to move first as opposed to when your opponent gets to move first?
