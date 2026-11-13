---
tag: N8NR7M3XRM
kind: problem
type: answer
answer: 6k,6k+1,6k-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77082
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The fields of an $n \times n$ board, where $n \geqslant 3$, are coloured black and white as on the usual chessboard, with the field in the upper left-hand corner being black. We change the white fields into black ones, in the following manner: in each step we choose an arbitrary rectangle of size $2 \times 3$ or $3 \times 2$, which still contains three white fields, and we blacken these three fields. For which $n$ can we, after some number of steps, make the whole board black?
