---
tag: HNE800C6SK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2015668
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28790
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228808
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2006 Tournament of Towns
---
A Magician has a deck of $52$ cards. Spectators want to know the order of cards in the deck(without specifying face-up or face-down). They are allowed to ask the questions "How many cards are there between such-and-such card and such-and-such card?" One of the spectators knows the card order. Find the minimal number of questions he needs to ask to be sure that the other spectators can learn the card order. (9)
