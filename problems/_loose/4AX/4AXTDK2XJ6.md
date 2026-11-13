---
tag: 4AXTDK2XJ6
kind: problem
type: answer
answer: "20000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102521
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On 400 cards, the natural numbers $1,2,3, \cdots, 400$ are written. A and B play the following game: In the first step, A arbitrarily takes 200 cards for himself. B then takes 100 cards each from the remaining 200 cards and the 200 cards in A's hand for himself, leaving the remaining 200 cards for A. In the next step, A takes 100 cards each from the cards in both of their hands for himself, leaving the remaining 200 cards for B. This continues until B completes the 200th step, after which both calculate the sum of the numbers on the cards in their hands, $C_{A}, C_{B}$, and then A pays B the difference $C_{B}-C_{A}$. What is the maximum difference B can obtain if both play with the correct strategy?
