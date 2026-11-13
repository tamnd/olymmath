---
tag: 74T2MPY8BX
kind: problem
type: answer
answer: 12n+r-32
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The following "card trick" is to be mathematically justified:

A player is asked to draw a card from a deck of 32 cards and place it face down. Let's assume, for example (without regard to the suit), that this is a Seven.

The player then places additional cards on the drawn one, counting from the value of the drawn card up to 11 (in this example, "eight, nine, ten, eleven"). This creates a pile of cards. The procedure is continued with more piles until a remainder of cards remains that does not form a complete pile (if an Ace is drawn, it forms a pile by itself).

From the number of piles and the number of cards in the remainder, one can determine, without having watched the formation of the piles, the sum of the values of the drawn cards.

Provide the calculation.
