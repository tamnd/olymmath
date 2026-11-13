---
tag: D6KJJD8R45
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227425
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A game of solitaire strats of with $25$ cards. Some are facing up and sum are facing down.
In each move a card that's facing up should me choosen, taken away, and turning over the cards next to it (if there are cards next to it). The game is won when you have accomplished to take all the $25$ cards from the table.
If you initially start with $n$ cards facing up, find all the values of $n$ such that the game can be won. Explain how to win the game, independently from the initial placement of the cards facing up, justify your answer for why it is impossible to win with other values of $n$.
Two cards are neighboring when one is immediately next to the other, to the left or right.

Example: The card marked $A$ has two neighboring cards and the one marked with only a $B$ has only one neighboring card. After taking a card there is a hole left, such that the card marked $C$ has only one neighboring card, and the one marked $D$ does'nt have any.
