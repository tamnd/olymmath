---
tag: K1RFAZBWP6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1984 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1889017
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55424
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248791
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1984
    source: hf-ai-mo-aops
    label: 1984 All Soviet Union Mathematical Olympiad
---
The white fields of $3x3$ chess-board are filled with either $+1$ or $-1$ . For every field, let us calculate the product of neighbouring numbers. Then let us change all the numbers by the respective products. Prove that we shall obtain only $+1$ 's, having repeated this operation finite number of times.
