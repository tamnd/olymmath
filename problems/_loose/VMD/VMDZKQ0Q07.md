---
tag: VMDZKQ0Q07
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Indonesia MO
    url: https://artofproblemsolving.com/community/c6h3388544
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-osn/2024
    source: hf-ai-mo-aops
    label: 2024 Indonesia MO
---
Kobar and Borah are playing on a whiteboard with the following rules: They start with two distinct positive integers on the board. On each step, beginning with Kobar, each player takes turns changing the numbers on the board, either from $P$ and $Q$ to $2P-Q$ and $2Q-P$ , or from $P$ and $Q$ to $5P-4Q$ and $5Q-4P$ . The game ends if a player writes an integer that is not positive. That player is declared to lose, and the opponent is declared the winner.

At the beginning of the game, the two numbers on the board are $2024$ and $A$ . If it is known that Kobar does not lose on his first move, determine the largest possible value of $A$ so that Borah can win this game.
