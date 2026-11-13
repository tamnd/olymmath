---
tag: 1JXEGEA2GX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2487626
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19891
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2021
    source: hf-ai-mo-aops
    label: 2021 Caucasus Mathematical Olympiad
---
4 tokens are placed in the plane. If the tokens are now at the vertices of a convex quadrilateral $P$ , then the following move could be performed: choose one of the tokens and shift it in the direction perpendicular to the diagonal of $P$ not containing this token; while shifting tokens it is prohibited to get three collinear tokens.

Suppose that initially tokens were at the vertices of a rectangle $\Pi$ , and after a number of moves tokens were at the vertices of one another rectangle $\Pi'$ such that $\Pi'$ is similar to $\Pi$ but not equal to $\Pi $ . Prove that $\Pi$ is a square.
