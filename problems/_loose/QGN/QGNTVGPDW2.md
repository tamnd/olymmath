---
tag: QGNTVGPDW2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1986 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1890556
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55465
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248832
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1986
    source: hf-ai-mo-aops
    label: 1986 All Soviet Union Mathematical Olympiad
---
All the fields of a square $n\times n$ (n>2) table are filled with $+1$ or $-1$ according to the rules:

*At the beginning $-1$ are put in all the boundary fields. The number put in the field in turn (the field is chosen arbitrarily) equals to the product of the closest, from the different sides, numbers in its row or in its column.*

a) What is the minimal

b) What is the maximal

possible number of $+1$ in the obtained table?
