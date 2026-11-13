---
tag: TR51TKWW6Z
kind: problem
type: answer
answer: "144"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a stack of 200 cards, numbered from 1 to 200 from top to bottom. Starting from the top card, perform the following operations in sequence: remove the top card, and place the next card at the bottom of the stack; then remove the top card (originally the third card), and place the next card at the bottom of the stack... Repeat this process. What is the number of the card that remains?

The card that remains is the original card number $\mathbf{2 0 0}$ out of the 200 cards.
