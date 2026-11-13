---
tag: J9ZSHEYAPN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Federal Competition For Advanced Students, Part 2
    url: https://artofproblemsolving.com/community/c6h483107
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7884
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209968
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo/2012
    source: hf-ai-mo-aops
    label: 2012 Federal Competition For Advanced Students, Part 2
---
Given an equilateral triangle $ABC$ with sidelength 2, we consider all equilateral triangles $PQR$ with sidelength 1 such that

- $P$ lies on the side $AB$ ,
- $Q$ lies on the side $AC$ , and
- $R$ lies in the inside or on the perimeter of $ABC$ .

Find the locus of the centroids of all such triangles $PQR$ .
