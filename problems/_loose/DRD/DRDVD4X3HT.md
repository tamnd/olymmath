---
tag: DRDVD4X3HT
kind: problem
type: answer
answer: '[n/2]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1997
    source: hf-numinamath-1-5
    label: XLVIII OM - II - Problem 3
---
Given a set of $ n $ points ($ n \geq 2 $), no three of which are collinear. We color all segments with endpoints in this set such that any two segments sharing a common endpoint have different colors. Determine the smallest number of colors for which such a coloring exists.
