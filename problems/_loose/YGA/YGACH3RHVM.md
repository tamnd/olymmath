---
tag: YGACH3RHVM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $27$ cardboard and $27$ plastic boxes. There are balls of certain colors inside the boxes. It is known that any two boxes of the same kind do not have a ball with the same color. Boxes of different kind have at least one ball of the same color. At each step we select two boxes that have a ball of same color and switch this common color into any other color we wish. Find the smallest number $n$ of moves required.
