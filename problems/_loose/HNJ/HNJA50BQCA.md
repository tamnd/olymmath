---
tag: HNJA50BQCA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 CAPS Match
    url: https://artofproblemsolving.com/community/c6h3617488
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2519
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2025
    source: hf-ai-mo-aops
    label: 2025 CAPS Match
---
Maryam and Artur play a game on a board, taking turns. At the beginning, the polynomial $XY-1$ is written on the board. Artur is the first to make a move. In each move, the player replaces the polynomial $P(X,Y)$ on the board with one of the following polynomials of their choice:
(a) $X\cdot P(X,Y),$ (b) $Y\cdot P(X,Y),$ (c) $P(X,Y)+a,$ where $a\le 2025$ is an arbitrary integer.
The game stops after each player has made 2025 moves. Let $Q(X,Y)$ be the polynomial on the board after the game ends. Maryam wins if the equation $Q(x,y)=0$ has a finite and odd number of positive integer solutions $(x,y).$ Show that Maryam can always win the game, no matter how Artur plays.
