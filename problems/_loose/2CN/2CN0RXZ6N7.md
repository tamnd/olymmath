---
tag: 2CN0RXZ6N7
kind: problem
type: answer
answer: Srečkoused2020colors,Malerused2022colors
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188353
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Srečko and Maler are each given a sheet of paper with 2023 points arranged as vertices of a regular polygon. They are then given the task to color all the segments connecting these points (each on their own sheet) such that:

( $1^{0}$ ) There is no triangle with vertices among these points whose sides are all colored the same color.

( $2^{0}$ ) There is no triangle with vertices among these points whose sides are colored in three different colors.

( $\left.3^{0}\right)$ There is no quadrilateral with vertices among these points (not necessarily convex) whose sides are all colored the same color.

After coloring, it is observed that Maler used at least two more colors than Srečko. How many colors did each of them use? Explain your answer.
