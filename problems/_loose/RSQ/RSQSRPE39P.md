---
tag: RSQSRPE39P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h445886
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40552
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237426
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2004
    source: hf-ai-mo-aops
    label: 2004 Greece National Olympiad
---
Find the greatest value of $M$ $\in \mathbb{R}$ such that the following inequality is true $\forall$ $x, y, z$ $\in \mathbb{R}$ $x^4+y^4+z^4+xyz(x+y+z)\geq M(xy+yz+zx)^2$ .
