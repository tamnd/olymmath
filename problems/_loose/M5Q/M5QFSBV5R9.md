---
tag: M5QFSBV5R9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h607378
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11151
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2014
    source: hf-ai-mo-aops
    label: 2014 IberoAmerican
---
$2014$ points are placed on a circumference. On each of the segments with end points on two of the $2014$ points is written a non-negative real number. For any convex polygon with vertices on some of the $2014$ points, the sum of the numbers written on their sides is less or equal than $1$ . Find the maximum possible value for the sum of all the written numbers.
