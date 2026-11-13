---
tag: ZG9NJFK9EA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1954 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1895070
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56752
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249650
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1954
    source: hf-ai-mo-aops
    label: 1954 Moscow Mathematical Olympiad
---
From an arbitrary point $O$ inside a convex $n$ -gon, perpendiculars are drawn on (extensions of the) sides of the $n$ -gon. Along each perpendicular a vector is constructed, starting from $O$ , directed towards the side onto which the perpendicular is drawn, and of length equal to half the length of the corresponding side. Find the sum of these vectors.
