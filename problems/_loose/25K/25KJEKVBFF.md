---
tag: 25KJEKVBFF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189459
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 3$ be a positive integer. Alice and Bob are playing a game in which they take turns colouring the vertices of a regular $n$-gon. Alice plays the first move. Both players start the game with 0 points. In each turn, player picks a vertex $V$ which hasn't been coloured and colours it. Then, they add $k$ points to their point tally, where $k$ is the number of neighbouring vertices of $V$ which have already been coloured. (Thus, $k$ is either 0,1 or 2 .)

The game ends when all vertices have been coloured, and the player with more points wins. For every $n \geqslant 3$, determine which player has a winning strategy.

(Josip Pupić)
