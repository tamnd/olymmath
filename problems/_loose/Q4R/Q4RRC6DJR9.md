---
tag: Q4RRC6DJR9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h391336
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5953
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
A rectangle is divided into $2\times 1$ and $1\times 2$ dominoes. In each domino, a diagonal is drawn, and no two diagonals have common endpoints. Prove that exactly two corners of the rectangle are endpoints of these diagonals.
