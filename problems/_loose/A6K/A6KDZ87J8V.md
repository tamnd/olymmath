---
tag: A6KDZ87J8V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3344258
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2024
    source: hf-ai-mo-aops
    label: 2024 ELMO Shortlist
---
Let $P(x)$ be a polynomial with integer coefficients that has at least one rational root. Let $n$ be a positive integer.

Alan and Allan are playing a game. First, Alan writes down $n$ integers at $n$ different locations on a board. Then Allan may make moves of the following kind: choose a position that has integer $a$ written, then choose a different position that has integer $b$ written, then at the first position erase $a$ and in its place write $a+P(b)$ . After any nonnegative number of moves, Allan may choose to end the game. Once Allan ends the game, his score is the number of times the mode (most common element) of the integers on the board appears.

Find, in terms of $P(x)$ and $n$ , the maximum score Allan can guarantee.

*Henrick Rabinovitz*
