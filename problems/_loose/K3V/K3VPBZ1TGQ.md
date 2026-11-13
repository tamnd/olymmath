---
tag: K3VPBZ1TGQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3135545
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44455
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Iran MO (3rd Round)
---
There is $n$ black points in the plane.We do the following algorithm:
Start from any point from those $n$ points and colour it red. Then connect this point to the nearest black point available and colour this new point red. Then do the same with this point but at any step , but you are never allowed to draw a line which intersects on of the current drawn segments. If you reach an intersection , the algorithm is over.
Is it true that for any $n$ and at any initial position , we can start from a point st in the algorithm , we reach all the points?
