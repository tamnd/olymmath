---
tag: XE50GR4GHS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two people A and B play a game in the $m \times n$ grid ($m,n \in \mathbb{N^*}$). Each person respectively (A plays first) draw a segment between two point of the grid such that this segment doesn't contain any point (except the 2 ends) and also the segment (except the 2 ends) doesn't intersect with any other segments. The last person who can't draw is the loser. Which one (of A and B) have the winning tactics?
