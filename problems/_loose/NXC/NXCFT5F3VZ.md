---
tag: NXCFT5F3VZ
kind: problem
type: answer
answer: All positive integers n divisible by 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian mathematical olympiad
---
A grid square $n \times n$ is given. Initially its cells are colored in white and black in a chessboard manner so that at least one of the corner cells is black. By one move it is allowed to recolor all 4 cells in some square $2 \times 2$ following the rule: each white cell is recolored to black, each black cell is recolored to green, and each green cell is recolored to white. Find all possible values of $n$ such that by a finite number of moves it is possible to obtain the chessboard coloring of $n \times n$ square (in black and white) that is inverse to the initial coloring.
(B. Trushin)
