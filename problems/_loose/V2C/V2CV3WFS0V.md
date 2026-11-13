---
tag: V2CV3WFS0V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119381
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The 58th question: A stack of cards consists of 1024 cards, each card containing a different set of digits (0-9), such that any two sets are distinct (thus, one card is empty). Two players take turns drawing cards from the stack, each taking one card per round, until all cards are taken. After all cards are taken, each player checks if they can discard one of their cards so that each of the ten digits appears on an even number of the remaining cards. If one player can discard a card and the other cannot, the player who can discard a card wins. Otherwise, the game is a draw. Determine all possible first selections for the player who goes first, such that they have a winning strategy.
