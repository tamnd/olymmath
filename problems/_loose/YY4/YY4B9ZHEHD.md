---
tag: YY4B9ZHEHD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2017
    url: https://artofproblemsolving.com/community/c6h3043748
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57198
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250017
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2017
    source: hf-ai-mo-aops
    label: Russian TST 2017
---
A regular hexagon is divided by straight lines parallel to its sides into $6n^2$ equilateral triangles. On them, there are $2n$ rooks, no two of which attack each other (a rook attacks in directions parallel to the sides of the hexagon). Prove that if we color the triangles black and white such that no two adjacent triangles have the same color, there will be as many rooks on the black triangles as on the white ones.
