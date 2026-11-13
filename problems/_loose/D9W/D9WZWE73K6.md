---
tag: D9WZWE73K6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2111627
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54901
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230345
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2015
    source: hf-ai-mo-aops
    label: 2015 239 Open Mathematical Olympiad
---
There is a closed polyline with $n$ edges on the plane. We build a new polyline which edges connect the midpoints of two adjacent edges of the previous polyline. Then we erase previous polyline and start over and over. Also we know that each polyline satisfy that all vertices are different and not all of them are collinear. For which $n$ we can get a polyline that is a сonvex polygon?
