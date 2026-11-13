---
tag: 64TSAYRF2C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=66127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the cells of a $11 \times 11 \times 11$ cube, the numbers $1,2, \ldots, 1331$ are placed. Two worms start from one corner cube and head to the opposite corner cube. Each worm can crawl to an adjacent cube by a face, with the first worm able to crawl if the number in the adjacent cube differs by 8, and the second worm if it differs by 9. Does there exist a placement of numbers such that both worms can reach the opposite corner cube?
