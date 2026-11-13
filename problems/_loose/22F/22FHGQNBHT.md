---
tag: 22FHGQNBHT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2984870
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60509
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252587
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2007
    source: hf-ai-mo-aops
    label: 2007 Switzerland - Final Round
---
The plane is divided into equilateral triangles of side length $1$ . Consider a equilateral triangle of side length $n$ whose sides lie on the grid lines. On every grid point on the edge and inside of this triangle lies a stone. In a move, a unit triangle is selected, which has exactly $2$ corners with is covered with a stone. The two stones are removed, and the third corner is turned a new stone was laid. For which $n$ is it possible that after finitely many moves only one stone left?
