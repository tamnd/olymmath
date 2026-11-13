---
tag: QGGA0NJ73F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose 25 people are seated around a round table to discuss issues, and they vote once every hour, each expressing either a yes or a no. The voting method is as follows: if in the $n$-th vote, his vote is the same as at least one of the two adjacent people, then his vote in the $(n+1)$-th round will be the same as in the $n$-th round; if in the $n$-th vote his vote is different from both adjacent people, then his vote in the $(n+1)$-th round will be different from the $n$-th round. Try to prove that regardless of how everyone initially votes, there will always be a moment after which no one's vote will change.
