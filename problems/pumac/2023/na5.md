---
tag: XDWNF0T0DX
kind: problem
appearances:
  - at: pumac/2023/na5
    primary: true
  - at: pumac/2023/nb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Number_Theory_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
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
---
You play a game where you and an adversarial opponent take turns writing down positive integers on a chalkboard; the only condition is that, if $m$ and $n$ are written consecutively on the board, $\gcd(m,n)$ must be squarefree. If your objective is to make sure as many integers as possible that are strictly less than $404$ end up on the board (and your opponent is trying to minimize this quantity), how many more such integers can you guarantee will eventually be written on the board if you get to move first as opposed to when your opponent gets to move first?
