---
tag: GBK5F10M3F
kind: problem
type: answer
answer: n \text{ can be any natural number}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222886
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ fleas on an infinite sheet of triangulated paper. Initially the fleas are in different small triangles, all of which are inside some equilateral triangle consisting of $n^2$ small triangles. Once a second each flea jumps from its original triangle to one of the three small triangles having a common vertex but no common side with it. For which natural numbers $n$ does there exist an initial configuration such that after a finite number of jumps all the $n$ fleas can meet in a single small triangle?
