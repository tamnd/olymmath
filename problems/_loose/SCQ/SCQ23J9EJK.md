---
tag: SCQ23J9EJK
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n(n \geqslant 2)$ cards, each with a real number written on it, and these $n$ numbers are all distinct. Now these cards are arbitrarily divided into two piles (each pile has at least one card), and it is always possible to take one card from the first pile and place it in the second pile, then take one card from the second pile and place it in the first pile (it can be the same card), so that the sum of the numbers written on the cards in each pile is equal to 0. Find the maximum possible value of $n$.
