---
tag: CQJ9RHH1V6
kind: problem
type: answer
answer: 2^n-n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88859
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. Two identical sets of $n$ cards, each labeled from 1 to $n$, are given. On the table, all the cards from the first set are arranged in some order from left to right, followed by all the cards from the second set in the same order. We say that such an arrangement of cards is good if it is possible to select and remove some $n$ cards so that the remaining $n$ cards are arranged in increasing order from left to right, with the numbers from 1 to $n$. How many good arrangements of cards are there?
