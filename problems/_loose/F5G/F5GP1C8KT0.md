---
tag: F5GP1C8KT0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791433
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=134
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203783
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
Adam places down cards one at a time from a standard 52 card deck (without replacement) in a pile. Each time he places a card, he gets points equal to the number of cards in a row immediately before his current card that are all the same suit as the current card. For instance, if there are currently two hearts on the top of the pile (and the third card in the pile is not hearts), then placing a heart would be worth 2 points, and placing a card of any other suit would be worth 0 points. What is the expected number of points Adam will have after placing all 52 cards?

*Proposed by Adam Bertelli*
