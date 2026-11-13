---
tag: 2CFACVPJCY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h371925
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44065
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2000
    source: hf-ai-mo-aops
    label: 2000 Iran MO (2nd round)
---
In a tetrahedron we know that sum of angles of all vertices is $180^\circ.$ (e.g. for vertex $A$ , we have $\angle BAC + \angle CAD + \angle DAB=180^\circ.$ )
Prove that faces of this tetrahedron are four congruent triangles.
