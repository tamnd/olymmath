---
tag: 9HAVV8JHKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=147
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
Let $n$ be a positive integer. Consider an $n \times n$ chessboard with certain cells colored green. A rook can be placed on any green cell and moves only to other green cells, changing its direction horizontally and vertically with each subsequent move. It is important to note that remaining in the same cell is not considered a valid move. It is known that a rook cannot return to its starting cell within six moves. Prove that the number of green cells on the chessboard is less than $2n(1 + \sqrt[3]{n})$.
