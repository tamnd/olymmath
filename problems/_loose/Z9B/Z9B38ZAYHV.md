---
tag: Z9B38ZAYHV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097520
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28478
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149005
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1999 Tournament Of Towns
---
Two players play the following game. The first player starts by writing either $0$ or $1$ and then, on his every move, chooses either $0$ or $1$ and writes it to the right of the existing digits until there are $1999$ digits. Each time the first player puts down a digit (except the first one) , the second player chooses two digits among those already written and swaps them. Can the second player guarantee that after his last move the line of digits will be symmetrical about the middle digit?

(I Izmestiev)
