---
tag: JNYDSK57G4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=155804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In how many different ways can the long knight get from the bottom left-hand corner to the top right-hand corner in 5 moves?
20.2 A knight's tour on a chessboard is a sequence of 64 moves by a chess knight on an $8 \times 8$ grid in which it ends up on the square where it begins, and visits each of the other squares exactly once. An example of a knight's tour is shown on the right. This knight's tour was found by the great Swiss mathematician Leonhard Euler (1707-1783).
It is not possible to find a complete long knight's tour of a chessboard because, as we have seen in the solution to Question 20, a long knight starting on a particular square cannot reach half of the squares on the chessboard. If it starts on a white square it can only reach the other white squares, and if it starts on a black square it can only reach the other black squares.
Can you find a long knight's tour of the black squares, that is, a sequence of 32 moves by a long knight, starting on a black square, ending up on the square where it begins, and visiting each of the other black squares exactly once?
