---
tag: 5GGPWJZ3CA
kind: problem
type: answer
answer: Odd grids occur more frequently.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=184
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
Consider $2 \times 60$ grids where each cell contains a distinct number from $1$ to $120$. For each grid, calculate the sum of the elements in each row and each column, resulting in $62$ sums. A grid is called an *even grid* if all $62$ sums are even numbers, and an *odd grid* if all $62$ sums are odd numbers. Which type of grid (even or odd) occurs more frequently?

(Gantumur Choijilsuren)
