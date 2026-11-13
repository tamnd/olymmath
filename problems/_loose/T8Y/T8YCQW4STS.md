---
tag: T8YCQW4STS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h375031
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44074
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2002
    source: hf-ai-mo-aops
    label: 2002 Iran MO (2nd round)
---
A rectangle is partitioned into finitely many small rectangles. We call a point a cross point if it belongs to four different small rectangles. We call a segment on the obtained diagram maximal if there is no other segment containing it. Show that the number of maximal segments plus the number of cross points is $3$ more than the number of small rectangles.
