---
tag: QPN6CS8FJN
kind: problem
type: answer
answer: Forevery0\leqk\leq64,k\neq63,Simonahaswinningstrategy,atk=63,Lenkawinsautomatically
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75494
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Simona and Lenka are playing a game. For a given integer $k$ such that $0 \leqq k \leqq 64$, Simona selects $k$ squares on an $8 \times 8$ chessboard and marks each of them with a cross. Lenka then fills the chessboard with thirty-two domino tiles in some way. If the number of tiles covering two crosses is odd, Lenka wins; otherwise, Simona wins. Depending on $k$, determine which of the girls has a winning strategy.
