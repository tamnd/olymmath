---
tag: JQCJGTFAZR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77738
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice and Bob are playing with a deck of 2020 cards. On each card is written one of the integers from 1 to 2020 (each integer appears on exactly one card). Alice starts by removing a card of her choice from the deck, bearing the number a. Bob sees the card Alice has chosen and decides to remove the card bearing the number $ b $. Then Bob writes on a board one of the two polynomials $ x^{2} - a x + b $ or $ x^{2} - b x + a $ of his choice. The game continues in this manner until there are no more cards. At the end of the game, Bob wins if all the polynomials he has written have an integer root; otherwise, Alice wins. Show that Bob has a winning strategy.
