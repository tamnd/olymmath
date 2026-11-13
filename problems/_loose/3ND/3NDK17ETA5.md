---
tag: 3NDK17ETA5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1973 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368135
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25177
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1973
    source: hf-ai-mo-aops
    label: 1973 IMO Shortlist
---
Let $Ox, Oy, Oz$ be three rays, and $G$ a point inside the trihedron $Oxyz$ . Consider all planes passing through $G$ and cutting $Ox, Oy, Oz$ at points $A,B,C$ , respectively. How is the plane to be placed in order to yield a tetrahedron $OABC$ with minimal perimeter ?
