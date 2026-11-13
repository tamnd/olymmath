---
tag: XXRMCNWV9G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131165
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 55th question: There are 2018 people sitting around a round table playing a game. At the beginning, the referee distributes k cards to these 2018 people (the referee does not keep any cards), and each person will receive some cards (it is allowed for one or more people to not receive any cards). In each round, the referee selects one person (both neighbors of this person must have at least one card), and both neighbors give one card to this person. The first round is conducted in the initial state, and each subsequent round is conducted based on the results of the previous round. If for each person, at least one of their two neighbors does not have any cards, the game ends. Find the maximum value of $\mathrm{k}$ such that at the start of the game, no matter how the referee distributes these k cards, and no matter how the referee selects people in each round, the game will definitely end.
