---
tag: CS94EFT5ER
kind: problem
type: answer
answer: 10,2,5,King,Queen,8,4,3,Jack,6,Ace,9,7
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167617
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A card shuffling machine always rearranges the cards in the same way relative to their initial order in one step. We placed the 13 spade cards in ascending order from 2 to Ace. The machine shuffled the cards once, and we put the resulting deck back in, which the machine shuffled again, then dealt out the 13 cards in the following order:

Jack, 10, King, 9, Ace, $4,5,2,6$, Queen, $7,3,8$.

What was the order of the cards after the first shuffle?
