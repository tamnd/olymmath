---
tag: VD8M4M1PG3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a chessboard $n \times n$, where $n\geq 4$ and $p=n+1$ is a prime number. A set of $n$ unit squares is called *tactical* if after putting down queens on these squares, no two queens are attacking each other. Prove that there exists a partition of the chessboard into $n-2$ tactical sets, not containing squares on the main diagonals.

Queens are allowed to move horizontally, vertically and diagonally.
