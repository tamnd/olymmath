---
tag: WFNSB7Q1RP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79478
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Eva the magician has a deck of 100 cards, numbered from 1 to 100; each card has the same number on both sides. Initially, she shuffled her cards arbitrarily and stacked them. Then she performs the following operations: if the card numbered $k$ is on top of the pile, she takes the first $k$ cards from the pile and reverses them, with the $k^{\text{th}}$ card moving to the first position, and so on. Finally, if the card numbered 1 is on top of the pile, Eva stops. Is any sequence of such operations necessarily finite?
