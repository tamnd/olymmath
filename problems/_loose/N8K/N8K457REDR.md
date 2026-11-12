---
tag: N8K457REDR
kind: problem
type: answer
answer: "54"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a plane, 36 points are marked, no three of which lie on the same line. Some pairs of marked points are connected by segments such that no more than 3 segments emanate from each marked point.

What is the maximum number of different closed 4-segment broken lines that can result?

The vertices of the broken line can only be the marked points, and the segments can only be the drawn segments. It does not matter where the broken line starts or how it is oriented: for example, if for some 4 marked points $ A, B, C, D $ the segments $ AB, BC, CD, DA $ are drawn, then $ ABCD, BCDA, CDAB, DABC, ADCB, BADC, CBAD, DCBA $ are considered the same broken line.
