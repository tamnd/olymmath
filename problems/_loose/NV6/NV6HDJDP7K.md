---
tag: NV6HDJDP7K
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are 3 piles of stones, and A moves 1 stone from one pile to another each time. A can receive payment from B for each move, the amount of which is equal to the difference between the number of stones in the pile where the stone is placed and the number of stones left in the pile where the stone is taken from. If this difference is negative, A must return this amount of money to B (if A has no money to return, it can be temporarily owed). After several moves, all the stones are back in their original piles. Find the maximum amount of money A can earn at this point.
