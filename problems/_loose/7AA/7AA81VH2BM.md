---
tag: 7AA81VH2BM
kind: problem
type: answer
answer: 2n-4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $N \times N (N \geqslant 2)$ board, two diagonally opposite corner cells are colored black, and all other cells are colored white. In one step, we select a row or a column and change the color of each cell in that row or column from black to white and vice versa. What is the smallest additional number of cells that we must color black at the beginning so that after a finite number of such steps, we can obtain a board where all cells are black?
