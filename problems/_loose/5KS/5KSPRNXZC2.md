---
tag: 5KSPRNXZC2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h6376
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55786
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2001
    source: hf-ai-mo-aops
    label: 2001 All-Russian Olympiad
---
Consider a convex $2000$ -gon, no three of whose diagonals have a common point. Each of its diagonals is colored in one of $999$ colors. Prove that there exists a triangle all of whose sides lie on diagonals of the same color. (Vertices of the triangle need not be vertices of the original polygon.)
