---
tag: HJXMQ1D1JC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2096405
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28514
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2000 Tournament Of Towns
---
Give and Take divide $100$ coins between themselves as follows. In each step, Give chooses a handful of coins from the heap, and Take decides who gets this handful. This is repeated until all coins have been taken, or one of them has $9$ handfuls. In the latter case, the other gets all the remaining coins. What is the largest number of coins that Give can be sure of getting no matter what Take does?

(A Shapovalov)
