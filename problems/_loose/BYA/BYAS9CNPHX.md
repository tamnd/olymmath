---
tag: BYAS9CNPHX
kind: problem
type: answer
answer: 3^{13}-3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143920
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A deck of cards consists of 52 cards, with 13 cards of each of the four suits: "Diamonds," "Clubs," "Hearts," and "Spades," numbered $2,3, \cdots, 10, \mathrm{~J}, \mathrm{Q}, \mathrm{K}, \mathrm{A}$, respectively. Two cards of the same suit and adjacent numbers are called "consecutive suited cards," and $\mathrm{A}$ can be considered as 1, making it consecutive with 2. Determine the number of ways to draw 13 cards from this deck such that each number appears and no two cards form a consecutive suited pair.
