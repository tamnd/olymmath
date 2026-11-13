---
tag: 2ZENCWGKZ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Hong Kong Team Selection Test
    url: https://artofproblemsolving.com/community/c6h2971455
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=746
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204399
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2023
    source: hf-ai-mo-aops
    label: 2023 Hong Kong Team Selection Test
---
Given a $2023 \times 2023$ square grid, there are beetles on some of the unit squares, with at most one beetle on each unit square. In the first minute, every beetle will move one step to its right or left adjacent square. In the second minute, every beetle will move again, only this time, in case the beetle moved right or left in the previous minute, it moves to top or bottom in this minute, and vice versa, and so on. What is the minimum number of beetles on the square grid to ensure that, no matter where the beetles are initially, and how they move in the first minute, but after finitely many minutes, at least two beetles will meet at a certain unit square.
