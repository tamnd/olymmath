---
tag: B6A0QE2WDS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h577513
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54416
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/1995
    source: hf-ai-mo-aops
    label: 1995 Romania Team Selection Test
---
Suppose that $n$ polygons of area $s = (n - 1)^2$ are placed on a polygon of area $S = \frac{n(n - 1)^2}{2}$ . Prove that there exist two of the $n$ smaller polygons whose intersection has the area at least $1$ .
