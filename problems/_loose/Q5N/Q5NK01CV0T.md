---
tag: Q5NK01CV0T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254155
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35781
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
Given positive integer $ m \geq 17$ , $ 2m$ contestants participate in a circular competition. In each round, we devide the $ 2m$ contestants into $ m$ groups, and the two contestants in one group play against each other. The groups are re-divided in the next round. The contestants compete for $ 2m-1$ rounds so that each contestant has played a game with all the $ 2m-1$ players. Find the least possible positive integer $ n$ , so that there exists a valid competition and after $ n$ rounds, for any $ 4$ contestants, non of them has played with the others or there have been at least $ 2$ games played within those $ 4$ .
