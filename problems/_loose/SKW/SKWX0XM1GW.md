---
tag: SKWX0XM1GW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111559
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n^{2}$ chess pieces on an $n^{2} \times n^{2}\left(n \in \mathbf{Z}_{+}\right)$ chessboard. In one command, all the chess pieces change their positions to other cells, such that the distance between the centers of the cells where each piece was before and after the command is $n$. If, before and after one command, no two pieces are in the same row or the same column on the chessboard, then such a command is called a successful operation. Find the values of $n$ that allow for a successful operation.
