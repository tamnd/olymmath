---
tag: SHT9208MYS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h386574
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53996
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247546
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2001
    source: hf-ai-mo-aops
    label: 2001 Romania National Olympiad
---
We consider a right trapezoid $ABCD$ , in which $AB||CD,AB>CD,AD\perp AB$ and $AD>CD$ . The diagonals $AC$ and $BD$ intersect at $O$ . The parallel through $O$ to $AB$ intersects $AD$ in $E$ and $BE$ intersects $CD$ in $F$ . Prove that $CE\perp AF$ if and only if $AB\cdot CD=AD^2-CD^2$ .
