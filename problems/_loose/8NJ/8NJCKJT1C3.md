---
tag: 8NJCKJT1C3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h85771
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44546
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240784
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Iran Team Selection Test
---
Suppose we have a simple polygon (that is it does not intersect itself, but not necessarily convex).
Show that this polygon has a diameter which is completely inside the polygon and the two arcs it creates on the polygon perimeter (the two arcs have 2 vertices in common) both have at least one third of the vertices of the polygon.
