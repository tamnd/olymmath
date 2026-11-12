---
tag: SQVNKB69JY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h2047513
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61116
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Taiwan TST Round 1
---
Alice and Bob play a game on a Cartesian Coordinate Plane. At the beginning, Alice chooses a lattice point $ \left(x_{0}, y_{0}\right) $ and places a pudding. Then they plays by turns (B goes first) according to the rules

a. If $ A $ places a pudding on $ \left(x,y\right) $ in the last round, then $ B $ can only place a pudding on one of $ \left(x+2, y+1\right), \left(x+2, y-1\right), \left(x-2, y+1\right), \left(x-2, y-1\right) $

b. If $ B $ places a pudding on $ \left(x,y\right) $ in the last round, then $ A $ can only place a pudding on one of $ \left(x+1, y+2\right), \left(x+1, y-2\right), \left(x-1, y+2\right), \left(x-1, y-2\right) $ Furthermore, if there is already a pudding on $ \left(a,b\right) $ , then no one can place a pudding on $ \left(c,d\right) $ where $ c \equiv a \pmod{n}, d \equiv b \pmod{n} $ .

1. Who has a winning strategy when $ n = 2018 $ 1. Who has a winning strategy when $ n = 2019 $
