---
tag: Z7WCXTWXK3
kind: problem
type: answer
answer: "1006009"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A deck of three-color cards, with a total of 32 cards, where each of the red, yellow, and blue cards are 10 each, numbered $1, 2, \cdots, 10$; there are also a big and a small joker, each numbered 0. From this deck, several cards are drawn, and then the score is calculated according to the following rules: each card numbered $k$ is counted as $2^{k}$ points. If the sum of their scores is 2004, these cards are called a "good" card group. Try to find the number of "good" card groups.
(2004 National Girls' Olympiad)
