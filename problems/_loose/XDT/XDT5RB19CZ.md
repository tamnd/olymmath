---
tag: XDT5RB19CZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83537
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We take all the spades from a deck of cards, and play the following solitaire: we look at the number i of the top card (with the convention that the Jack is 11, the Queen is 12, and the King is 13). We take the i top cards from the deck, flip them, and then place them back on top of the deck. For example, we go from J, $4,9,1, Q, 10,3,5, K, 2,8,6,7$ to $8,2, K, 5,3,10, Q, 1,9,4, J, 6,7$, where the card on the far left is the one on top of the deck. We win if, at some point, the top card is the Ace. Prove that we always win.
