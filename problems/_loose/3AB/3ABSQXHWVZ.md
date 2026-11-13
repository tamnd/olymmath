---
tag: 3ABSQXHWVZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h2949651
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=453
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Taiwan Mathematics Olympiad
---
There are $2022$ black balls numbered $1$ to $2022$ and $2022$ white balls numbered $1$ to $2022$ as well. There are also $1011$ black boxes and white boxes each. In each box we put two balls that are the same color as the the box. Prove that no matter how the balls are distributed, we can always pick one ball from each box such that the $2022$ balls we chose have all the numbers from $1$ to $2022$ .
