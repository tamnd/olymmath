---
tag: F3FZVAG4MK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 IMO
    url: https://artofproblemsolving.com/community/c6h410943
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23544
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: imo/1980
    source: hf-ai-mo-aops
    label: 1980 IMO
---
In the Euclidean three-dimensional space, we call *folding* of a sphere $S$ every partition of $S \setminus \{x,y\}$ into disjoint circles, where $x$ and $y$ are two points of $S$ . A folding of $S$ is called **linear** if the circles of the *folding* are obtained by the intersection of $S$ with a family of parallel planes or with a family of planes containing a straight line $D$ exterior to $S$ . Is every *folding* of a sphere $S$ **linear**?
