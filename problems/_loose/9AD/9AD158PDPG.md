---
tag: 9AD158PDPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Flanders Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2983973
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31692
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: be-vwo/2013
    source: hf-ai-mo-aops
    label: 2013 Flanders Math Olympiad
---
Anton the ant takes a walk along the vertices of a cube. He starts at a vertex and stops when it reaches this point again. Between two vertices it moves over an edge, a side face diagonal or a space diagonal. During the rout it visits each of the other vertices exactly *once* and nowhere intersects its road already traveled.
(a) Show that Anton walks along at least one edge.
(b) Show that Anton walks along at least two edges.
