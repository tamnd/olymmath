---
tag: NMEVX78JPS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Slovenia National Olympiad
    url: https://artofproblemsolving.com/community/c6h377554
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5681
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Slovenia National Olympiad
---
Let $ABCD$ be a square with the side of $20$ units. Amir divides this square into $400$ unit squares. Reza then picks $4$ of the vertices of these unit squares. These vertices lie inside the square $ABCD$ and define a rectangle with the sides parallel to the sides of the square $ABCD.$ There are exactly $24$ unit squares which have at least one point in common with the sides of this rectangle. Find all possible values for the area of a rectangle with these properties.
