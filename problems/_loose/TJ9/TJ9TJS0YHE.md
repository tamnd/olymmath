---
tag: TJ9TJS0YHE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1947 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1879036
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56611
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249509
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1947
    source: hf-ai-mo-aops
    label: 1947 Moscow Mathematical Olympiad
---
Given a convex pentagon $ABCDE$ , prove that if an arbitrary point $M$ inside the pentagon is connected by lines with all the pentagon's vertices, then either one or three or five of these lines cross the sides of the pentagon opposite the vertices they pass.

Note: In reality, we need to exclude the points of the diagonals, because that in this case the drawn lines can pass not through the internal points of the sides, but through the vertices. But if the drawn diagonals are not considered or counted twice (because they are drawn from two vertices), then the statement remains true.
