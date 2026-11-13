---
tag: SDF0XB1MBG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1972 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h146578
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39209
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236509
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/1972
    source: hf-ai-mo-aops
    label: 1972 Bundeswettbewerb Mathematik
---
There's a real number written on every field of a $n \times n$ chess board. The sum of all numbers of a "cross" (union of a line and a column) is $\geq a$ . What's the smallest possible sum of all numbers on the board¿
