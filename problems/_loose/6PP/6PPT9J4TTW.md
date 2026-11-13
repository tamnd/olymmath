---
tag: 6PPT9J4TTW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Mexico National Olympiad
    url: https://artofproblemsolving.com/community/c6h598670
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=47391
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243504
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mx-omm/2008
    source: hf-ai-mo-aops
    label: 2008 Mexico National Olympiad
---
We place $8$ distinct integers in the vertices of a cube and then write the greatest common divisor of each pair of adjacent vertices on the edge connecting them. Let $E$ be the sum of the numbers on the edges and $V$ the sum of the numbers on the vertices.

a) Prove that $\frac23E\le V$ .
b) Can $E=V$ ?
