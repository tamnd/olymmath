---
tag: 8XSS75PZFA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244596
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Julian and Johan are playing a game with an even number of cards, say $2n$ cards, ($n \in Z_{>0}$). Every card is marked with a positive integer. The cards are shuffled and are arranged in a row, in such a way that the numbers are visible. The two players take turns picking cards. During a turn, a player can pick either the rightmost or the leftmost card. Johan is the first player to pick a card (meaning Julian will have to take the last card). Now, a player's score is the sum of the numbers on the cards that player acquired during the game.
Prove that Johan can always get a score that is at least as high as Julian's.
