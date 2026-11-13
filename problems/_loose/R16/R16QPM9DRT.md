---
tag: R16QPM9DRT
kind: problem
type: answer
answer: "288"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160672
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $4 \times 4$ Sudoku grid is filled with digits so that each column, each row, and each of the four $2 \times 2$ sub-grids that composes the grid contains all of the digits from 1 to 4 . For example,
\begin{tabular}{|l|l|l|l|}
\hline 4 & 3 & 1 & 2 \\
\hline 2 & 1 & 3 & 4 \\
\hline 1 & 2 & 4 & 3 \\
\hline 3 & 4 & 2 & 1 \\
\hline
\end{tabular}

Find the total number of possible $4 \times 4$ Sudoku grids.
