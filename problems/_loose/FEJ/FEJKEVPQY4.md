---
tag: FEJKEVPQY4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1962 All Russian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1858271
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55040
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248398
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1962
    source: hf-ai-mo-aops
    label: 1962 All Russian Mathematical Olympiad
---
Given points $A' ,B' ,C' ,D',$ on the extension of the $[AB], [BC], [CD], [DA]$ sides of the convex quadrangle $ABCD$ , such, that the following pairs of vectors are equal: $$ [BB']=[AB], [CC']=[BC], [DD']=[CD], [AA']=[DA]. $$ Prove that the quadrangle $A'B'C'D'$ area is five times more than the quadrangle $ABCD$ area.
