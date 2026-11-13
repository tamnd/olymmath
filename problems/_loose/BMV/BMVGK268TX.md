---
tag: BMVGK268TX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85705
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A math teacher has 10 cards with the numbers 1 to 10, one number per card. She lays these cards in some order in a row next to each other on the table. Students then come to the table one by one. The student goes through the row of cards from left to right once and removes every card they encounter that (at that moment) is the lowest card still on the table. This continues until all cards have been picked up. For example, if the row of cards is in the order $3,1,4,5,8,6,9,10,2,7$ from left to right, the first student picks up the cards 1 and 2. Then the second student comes, who picks up the cards $3,4,5,6$, and 7. The third student then picks up the cards 8, 9, and 10.

Let $A$ be the number of orders of the cards in the stack that the teacher can choose so that exactly nine students take turns picking up cards. Let $B$ be the number of orders of the cards in the stack that the teacher can choose so that exactly two students take turns picking up cards.

Prove that $A=B$.
