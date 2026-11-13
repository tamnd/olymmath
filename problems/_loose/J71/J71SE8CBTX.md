---
tag: J71SE8CBTX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let $m$ and $n$ be positive integers. Consider an $m \times n$ grid in a standard rectangular coordinate system. A segment is called *good* if it is parallel to a side of the grid. We partition the grid into triangles with vertices at integer coordinates such that each triangle has at least one side that is good, and the height of the good sides is 1. Find the minimum number of triangles that have exactly two good sides.
(Bilegdemberel Bat-Amgalan)
