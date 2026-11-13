---
tag: AY7414EGDG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2485135
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28112
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228460
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1990 Tournament Of Towns
---
If a square is intersected by another square equal to it but rotated by $45^o$ around its centre, each side is divided into three parts in a certain ratio $a : b : a$ (which one can compute). Make the following construction for an arbitrary convex quadrilateral: divide each of its sides into three parts in this same ratio $a : b : a$ , and draw a line through the two division points neighbouring each vertex. Prove that the new quadrilateral bounded by the four drawn lines has the same area as the original one.

(A. Savin, Moscow)
