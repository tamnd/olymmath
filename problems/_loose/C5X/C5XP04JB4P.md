---
tag: C5XP04JB4P
kind: problem
type: answer
answer: "624"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78112
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have a deck containing 52 cards. Each card has a value among "1, 2, $3,4,5,6,7,8,9,10$, jack, queen, king" and a suit among "hearts, diamonds, spades, clubs", such that for each value and each suit, the deck contains a unique card with this value and this suit. A hand of 5 cards is a selection of 5 cards from this deck, without regard to the order in which the cards are chosen. How many hands of 5 cards contain four cards of the same value?

Only a numerical answer is expected here.
