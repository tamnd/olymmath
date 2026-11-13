---
tag: 51FCCQHZA6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1947317
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18174
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219749
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
Define a *modern artwork* to be a nonempty finite set of rectangles in the Cartesian coordinate plane with positive areas, pairwise disjoint interiors, and sides parallel to the coordinate axes. For a modern artwork $S$ , define its *price* to be the minimum number of colors with which Sean could paint the interiors of rectangles in $S$ such that every rectangle's interior is painted in exactly one color and every two distinct touching rectangles have distinct colors, where two rectangles are *touching* if they share infinitely many points. For a positive integer $n$ , let $g(n)$ denote the maximum price of any modern artwork with exactly $n$ rectangles. Compute $g(1) + g(2) + \cdots + g(2019).$ *Proposed by Yang Liu and Edward Wan*
