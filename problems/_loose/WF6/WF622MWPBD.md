---
tag: WF622MWPBD
kind: problem
type: answer
answer: '[\frac{n^{2}}{4}]+2'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ points $(n \geqslant 5)$ in a plane, where no four points are coplanar, find the smallest positive integer $m$ such that after connecting $m$ lines between the $n$ points, there must exist two triangles that share exactly one common point. (This problem is essentially a 2003 Chinese National Training Team practice problem, with only a slight change in the wording)
