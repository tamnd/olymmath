---
tag: YMG1F1AK6V
kind: problem
type: answer
answer: \frac{\sqrt{^{2}+n^{2}}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133907
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $m, n$, color the $m \times n$ chessboard's $m n$ $1 \times 1$ squares alternately in red and blue (any two squares sharing an edge are different colors, and the bottom-left square is red). At this point, the diagonal from the bottom left to the top right is colored with some red and blue segments (each segment has the same color as the square it is in). Find the sum of the lengths of all the red segments.
