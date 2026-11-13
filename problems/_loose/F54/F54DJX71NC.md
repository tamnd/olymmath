---
tag: F54DJX71NC
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have 1000 cards, numbered from 000 to 999. We also have 100 boxes, numbered from 00 to 99. A card can only be placed in a box whose number is obtained by erasing one digit from the card. Show that the cards can be placed in at least 50 boxes, but not fewer!
