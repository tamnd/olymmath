---
tag: PF35P0MJDQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We placed $n>3$ cards along a circle such that the back of each card is visible. In one step, we can perform the following swap with three adjacent cards: we place one of the two outer cards in the position of the other outer card, and we move the remaining two cards one position further and flip them. Is it possible to achieve, through a series of such steps, that every card returns to its initial position and the front of each card is visible?
