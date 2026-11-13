---
tag: G896HBPMEM
kind: problem
appearances:
  - at: pumac/2023/ca5
    primary: true
  - at: pumac/2023/cb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2023 official paper
    url: https://pumac.princeton.edu/s/Combinatorics_A_2023.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h3415003
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73441
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ assassins numbered from $1$ to $n,$ and all assasins are initially alive. The assassins play a game in which they take turns in increasing order of number, with assassin $1$ getting the first turn, then assassin $2$ , etc., with the order repeating after assassin $n$ has gone; if an assassin is dead when their turn comes up, then their turn is skipped and it goes to the next assassin in line. On each assassin's turn, they can choose to either kill the assassin who would otherwise move next or to do nothing. Each assassin will kill on their turn unless the only option for guaranteeing their own survival is to do nothing. If there are $2023$ assassins at the start of the game, after an entire round of turns in which no one kills, how many assassins must remain?
