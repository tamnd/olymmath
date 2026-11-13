---
tag: P3SRG5QM0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261671
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Emily draws six dots on a piece of paper such that no three lie on a straight line, then draws a line segment connecting each pair of dots. She then colors five of these segments red. Her coloring is said to be $\emph{red-triangle-free}$ if for every set of three points from her six drawn points there exists an uncolored segment connecting two of the three points. In how many ways can Emily color her drawing such that it is red-triangle-free?
