---
tag: 2A31A7BFDH
kind: problem
type: answer
answer: 5,0,0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186052
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Bernd and Jürgen are playing a game with exactly five red, exactly four blue game pieces, and a container that contains a sufficient number of yellow game pieces, according to the following rules:

At the beginning, the five red, four blue, and exactly three yellow pieces are placed on the table. Then the players take turns. The player whose turn it is takes three arbitrary pieces from the table, with the only prohibition being to take three red pieces; then he proceeds according to the following rules:

(1) Each red piece taken is placed back on the table.

(2) For each blue piece taken, a yellow piece is taken from the container and placed on the table; the blue piece goes into the container.

(3) Each yellow piece taken goes into the container.

Once these rules have been followed, the player has completed his turn. If a player, with his move, achieves that only red pieces remain on the table (so that the opponent cannot make another move), he wins. Jürgen makes the first move.

Provide a strategy with which Jürgen can force a win!
