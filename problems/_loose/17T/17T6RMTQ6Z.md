---
tag: 17T6RMTQ6Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h362397
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5120
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Iran MO (3rd Round)
---
**carpeting**

suppose that $S$ is a figure in the plane such that it's border doesn't contain any lattice points. suppose that $x,y$ are two lattice points with the distance $1$ (we call a point lattice point if it's coordinates are integers). suppose that we can cover the plane with copies of $S$ such that $x,y$ always go on lattice points ( you can rotate or reverse copies of $S$ ). prove that the area of $S$ is equal to lattice points inside it.

time allowed for this question was 1 hour.
