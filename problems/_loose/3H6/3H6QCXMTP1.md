---
tag: 3H6QCXMTP1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2210746
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54809
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2008
    source: hf-ai-mo-aops
    label: 2008 239 Open Mathematical Olympiad
---
You are given a checkered square, the side of which is $n - 1$ long and contains $n \geq 10$ nodes. A non-return path is a path along edges, the intersection of which with any horizontal or vertical line is a segment, point or empty set, and which does not pass along any edge more than once. What is the smallest number of non-return paths that can cover all the edges?
(An edge is a unit segment between adjacent nodes.)
