---
tag: FSWYZXYPZ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h373068
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4703
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2010
    source: hf-ai-mo-aops
    label: 2010 Brazil National Olympiad
---
Determine all values of $n$ for which there is a set $S$ with $n$ points, with no 3 collinear, with the following property: it is possible to paint all points of $S$ in such a way that all angles determined by three points in $S$ , all of the same color or of three different colors, aren't obtuse. The number of colors available is unlimited.
