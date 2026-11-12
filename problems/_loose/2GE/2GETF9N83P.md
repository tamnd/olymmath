---
tag: 2GETF9N83P
kind: problem
type: answer
answer: "512"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4507
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a deck of 1024 cards, each with a different set of digits from 0 to 9, and all sets are distinct (including an empty card). We will call a set of cards complete if each digit from 0 to 9 appears exactly once on them.

Find all natural $k$ for which there exists a set of $k$ cards with the following condition: among them, no complete set can be selected, but adding any card from the deck violates this condition.
