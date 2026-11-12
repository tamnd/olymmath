---
tag: 8XWWNPC0CD
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1750
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1999
    source: hf-numinamath-1-5
    label: L OM - II - Task 5
---
Let $ S = \{1, 2,3,4, 5\} $. Determine the number of functions $ f: S \to S $ satisfying the equation $ f^{50} (x) = x $ for all $ x \in S $.
Note: $ f^{50}(x) = \underbrace{f \circ f \circ \ldots \circ f}_{50} (x) $.
