---
tag: TTR4G29T9V
kind: problem
type: answer
answer: \frac{k^2 (k^2 + 1)}{2} \times (3k^2 - 3k - 3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an equilateral triangle with sidelength $k$ cm. With lines parallel to it's sides, we split it into $k^2$ small equilateral triangles with sidelength $1$ cm. This way, a triangular grid is created. In every small triangle of sidelength $1$ cm, we place exactly one integer from $1$ to $k^2$ (included), such that there are no such triangles having the same numbers. With vertices the points of the grid, regular hexagons are defined of sidelengths $1$ cm. We shall name as *value * of the hexagon, the sum of the numbers that lie on the $6$ small equilateral triangles that the hexagon consists of . Find (in terms of the integer $k>4$) the maximum and the minimum value of the sum of the values of all hexagons .
