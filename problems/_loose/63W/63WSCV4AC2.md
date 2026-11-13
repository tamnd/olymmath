---
tag: 63WSCV4AC2
kind: problem
type: answer
answer: n^2 + 2n - 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=396
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2023
    source: hf-mathnet
    label: Baltic Way Baltic Way 2023 Shortlist
---
Let $n > 1$ be an integer and let an $2 \times n$ grid be given, where the cells are labelled as $(x, y)$ with $1 \le x \le 2$ and $1 \le y \le n$. A grasshopper lives on the grid and occasionally jumps from one cell to another. The *length* of a jump from a cell $(x_1, y_1)$ to $(x_2, y_2)$ is defined as $|x_1 - x_2| + |y_1 - y_2|$. Determine the largest possible sum of lengths of jumps the grasshopper can make when it starts from one cell and never jumps to a cell it has visited before.
