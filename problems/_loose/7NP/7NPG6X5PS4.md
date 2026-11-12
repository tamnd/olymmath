---
tag: 7NPG6X5PS4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 China Girls Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3628422
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-gmo/2025
    source: hf-ai-mo-aops
    label: 2025 China Girls Math Olympiad
---
Let $N$ be a positive integer. There are $N$ pebbles on a table. Alice and Bob play a game by taking turns to pick pebbles from the table, with Alice starting first. On each turn, a player can perform one of the following two operations:

- **Operation A**: Pick 1, 2, or 3 pebbles;
- **Operation B**: Pick 4 pebbles.

Each player is allowed to perform Operation B at most 5 times. The player who picks the last pebbles wins.

Determine the number of $N$ in $1,2,\ldots,2025$ such that Alice has a winning strategy.
