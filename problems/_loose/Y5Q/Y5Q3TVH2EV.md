---
tag: Y5Q3TVH2EV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82982
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We are playing the following game: we start with three boxes that contain a certain number of tokens. At each step, we choose two boxes and transfer tokens from the box that has the most to the box that has the least until the number of tokens in the box that had the least has doubled. For example, if we had a box $A$ with 4 tokens and a box $B$ with 17 tokens, we transfer 4 tokens to box $A$ and end up with a box of 8 and a box of 13. Is it always possible to empty one of the three boxes in a finite number of steps?
