---
tag: KSZ3W3V4SM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At a round table, there are $n \geqslant 3$ players. The game leader distributes $n$ coins among the players such that not everyone has exactly one coin. The players can see how many coins everyone else has.

Every 10 seconds, the game leader rings a bell. At that moment, all players look at how many coins their neighbors have. They all do the following simultaneously:

- If a player has more coins than at least one of their two neighbors, the player gives exactly one coin away. They give it to the neighbor with the fewest coins. If both neighbors have the same number of coins, the coin is given to the left neighbor.
- If a player does not have more coins than at least one of their two neighbors, the player does nothing and waits for the next bell.

The game ends when everyone has exactly one coin.

(a) Find, for all $n \geqslant 3$, an initial distribution of the coins for which the game never ends (and show that this is indeed the case for the initial distribution you provide).

(b) Find, for all $n \geqslant 4$, an initial distribution of the coins for which the game does end (and show that this is indeed the case for the initial distribution you provide).
