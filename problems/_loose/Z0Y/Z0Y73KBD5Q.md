---
tag: Z0Y73KBD5Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a card game, each card is marked with an integer score from 1 to 100. A card with a higher score beats a card with a lower score, but a card with a score of 1 can beat a card with a score of 100. The player knows that there are 100 cards with different scores face down in front of them; the dealer knows the order of these cards and can actively tell the player which card beats which card among any two cards. Prove: The dealer can, through 100 such notifications, enable the player to subsequently determine the exact order of all the cards.
