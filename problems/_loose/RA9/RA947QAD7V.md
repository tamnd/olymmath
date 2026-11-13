---
tag: RA947QAD7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206619
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
I give you a deck of $n$ cards numbered $1$ through $n$. On each turn, you take the top card of the deck and place it anywhere you choose in the deck. You must arrange the cards in numerical order, with card $1$ on top and card $n$ on the bottom. If I place the deck in a random order before giving it to you, and you know the initial order of the cards, what is the expected value of the minimum number of turns you need to arrange the deck in order?
