---
tag: Y4CX08VGD1
kind: problem
type: answer
answer: ⌊3n/2⌋
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each square of an $n \times n$ chessboard either contains a rook or is empty. Suppose that for any two rooks not threatening each other there is an empty square which is threatened by each of these rooks. Find the maximal possible number of rooks on the chessboard.

*Note: A rook is threatening a square if they lie on the same line or column and all squares between them are empty.*
