---
tag: D30MH1ZJ1R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a grid of points where each point is coloured either white or black, such that no two rows have the same sequence of colours and no two columns have the same sequence of colours. Let a *table* denote four points on the grid that form the vertices of a rectangle with sides parallel to those of the grid. A table is called *balanced* if one diagonal pair of points are coloured white and the other diagonal pair black.

Determine all possible values of $k \geq 2$ for which there exists a colouring of a $k\times 2019$ grid with no balanced tables.

*proposed by the ICMC Problem Committee*
