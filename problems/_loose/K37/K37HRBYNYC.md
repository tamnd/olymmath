---
tag: K37HRBYNYC
kind: problem
type: answer
answer: "342351"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Label the faces of a cube with $1,2, \cdots, 6$ such that the sum of the numbers on opposite faces is 7. Now consider a chessboard with $50 \times 50$ squares, each square being the same size as a face of the cube. The cube is to be rolled from the southwest corner of the chessboard to the northeast corner, each roll being along an edge of the cube, moving the cube into the eastern or northern adjacent square (no moves to the south or west are allowed). During the rolling process, each square the cube lands on is marked with the number on the face of the cube that is in contact with the square. Find the maximum and minimum possible sums of all the numbers marked on the squares.
