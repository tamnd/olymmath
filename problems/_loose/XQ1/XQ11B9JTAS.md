---
tag: XQ11B9JTAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=115724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
${ }^{+}$ It is easy to see that the given conditions are necessary. To prove sufficiency, construct an Euler tour inductively, incorporating any finite branches that appear in the remaining graph immediately during the construction. To ensure that all edges are included, arrange the edges and always include the next edge. Two cases need to be considered: If $G$ has an odd cut, first cover the edges in the cut and connect their endpoints in pairs as soon as possible, then handle the two remaining infinite branches separately; If $G$ has no odd cut, cover its edges with a sequence of finite closed paths such that each intersects the next at a vertex, and then find an Euler tour in the union of these cycles.
