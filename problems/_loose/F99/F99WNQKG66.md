---
tag: F99WNQKG66
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h217759
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38779
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Estonia National Olympiad
---
Consider a rectangular grid of $ 10 \times 10$ unit squares. We call a *ship* a figure made up of unit squares connected by common edges. We call a *fleet* a set of ships where no two ships contain squares that share a common vertex (i.e. all ships are vertex-disjoint). Find the least number of squares in a fleet to which no new ship can be added.
