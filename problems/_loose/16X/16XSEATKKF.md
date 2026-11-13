---
tag: 16XSEATKKF
kind: problem
type: answer
answer: "26624"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Teacher $D$ placed cards with the numbers $1, 2, \cdots, 13$ in a clockwise order on a circle. Initially, all cards are face up. Each time, one card can be flipped to face down (once a card is face down, it cannot be flipped again). Teacher $D$'s rule for flipping cards is: if a face-up card has the number $A$, and the card that is 2 positions away is also face up, then Teacher $D$ can flip the card with the number $A$. For example, as long as the cards with the numbers 9 or 2 are face up, Teacher $D$ can flip the card with the number 12 (of course, provided that the card with the number 12 is still face up). In the end, if Teacher $D$ can flip 12 cards to face down, then Teacher $D$ is successful. To achieve success, how many different sequences of flips can Teacher $D$ use?
