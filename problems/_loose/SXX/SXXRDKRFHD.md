---
tag: SXXRDKRFHD
kind: problem
type: answer
answer: n(m^2+3m-1)/(3m)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=137
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a table with $n$ lines and $m$ columns ($n, m \in \mathbb{N}, n, m \ge 2$) consisting of $n \cdot m$ squares $1 \times 1$, which we will call *cells*. We call *snake* a sequence of cells with the following properties: the first cell is located on the first (top) line of the table, the last cell is located on the last line of the table and, starting with the second, each cell of the snake has a common side with the previous one and is not located on a line above the previous cell. The *length* of a snake is the number of cells that form the snake. Determine the arithmetic mean of the lengths of all the snakes in the table.
Cristian Șăvescu
