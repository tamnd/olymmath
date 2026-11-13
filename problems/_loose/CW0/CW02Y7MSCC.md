---
tag: CW02Y7MSCC
kind: problem
type: answer
answer: Lucky used 3 colors; Jinx used 5 colors.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/North_Macedonia/train/0000.parquet#row=384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Lucky and Jinx were each given a piece of paper with $2023$ drawn points arranged as the vertices of a regular polygon. They were then tasked to color all the segments connecting the points on their piece of paper such that: no triangle formed by these points has all edges in the same color nor in three different colors, and no quadrilateral (not necessarily convex) has all edges in the same color. After the coloring it was determined that Jinx used at least two more colors than Lucky. How many colors did each of them use?
