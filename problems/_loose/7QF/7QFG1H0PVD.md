---
tag: 7QFG1H0PVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You have the following pieces: one $4\times 1$ rectangle, two $3\times 1$ rectangles, three $2\times 1$ rectangles, and four $1\times 1$ squares. Ariel and Bernardo play the following game on a board of $n\times n$, where $n$ is a number that Ariel chooses. In each move, Bernardo receives a piece $R$ from Ariel. Next, Bernardo analyzes if he can place $R$ on the board so that it has no points in common with any of the previously placed pieces (not even a common vertex). If there is such a location for $R$, Bernardo must choose one of them and place $R$. The game stops if it is impossible to place $R$ in the way explained, and Bernardo wins. Ariel wins only if all $10$ pieces have been placed on the board.
a) Suppose Ariel gives Bernardo the pieces in decreasing order of size. What is the smallest n that guarantees Ariel victory?
b) For the $n$ found in a), if Bernardo receives the pieces in increasing order of size, is Ariel guaranteed victory?

Note: Each piece must cover exactly a number of unit squares on the board equal to its own size. The sides of the pieces can coincide with parts of the edge of the board.
