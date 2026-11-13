---
tag: QXHDNCTFM0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n(n \geqslant 3)$ boxes are arranged in a circle, and 1 ball, 2 balls, $\cdots, n$ balls are placed in them in a counterclockwise direction, respectively. Then the following operation is performed: choose three adjacent boxes, and either place 1 ball in each or, if all three boxes are non-empty, remove 1 ball from each. Find all positive integers $k$ such that it is possible to have exactly $k$ balls in each of the $n$ boxes after a finite number of operations.
