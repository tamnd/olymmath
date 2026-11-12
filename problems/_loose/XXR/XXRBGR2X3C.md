---
tag: XXRBGR2X3C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h412801
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28665
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2003 Tournament Of Towns
---
Two players in turn play a game. First Player has cards with numbers $2, 4, \ldots, 2000$ while Second Player has cards with numbers $1, 3, \ldots, 2001$ . In each his turn, a player chooses one of his cards and puts it on a table; the opponent sees it and puts his card next to the first one. Player, who put the card with a larger number, scores 1 point. Then both cards are discarded. First Player starts. After $1000$ turns the game is over; First Player has used all his cards and Second Player used all but one. What are the maximal scores, that players could guarantee for themselves, no matter how the opponent would play?
