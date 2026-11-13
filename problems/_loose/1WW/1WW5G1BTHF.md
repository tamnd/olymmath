---
tag: 1WW5G1BTHF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168561
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have some gold and some silver coins. The weight of any two coins is different. Someone arranged them in order of their weight, but by mistake, the heaviest one was placed at the last position instead of the first. (So the 1st position was taken by the 2nd heaviest, the 2nd position by the 3rd heaviest, etc.) We want to rearrange them in the correct weight order, but we have no extra space, so in one step we can only swap two (not necessarily adjacent) coins. Prove that if we rearrange the coins under these conditions, at some step we must have swapped a gold and a silver coin.
