---
tag: KS1389CRCT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1945 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1878189
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56583
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1945
    source: hf-ai-mo-aops
    label: 1945 Moscow Mathematical Olympiad
---
A right triangle $ABC$ moves along the plane so that the vertices $B$ and $C$ of the triangle's acute angles slide along the sides of a given right angle. Prove that point $A$ fills in a line segment and find its length.
