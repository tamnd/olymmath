---
tag: Z3YVA8EQCZ
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207488
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players are playing a turn based game on a $n \times n$ chessboard. At the beginning, only the bottom left corner of the chessboard contains a piece. At each turn, the player moves the piece to either the square just above, or the square just right, or the diagonal square just right-top. If a player cannot make a move, he loses the game. The game is played once on each $6\times 7$, $6 \times 8$, $7 \times 7$, $7 \times 8$, and $8 \times 8$ chessboard. In how many of them, can the first player guarantee to win?

$ \textbf{(A)}\ 1
\textbf{(B)}\ 2
\textbf{(C)}\ 3
\textbf{(D)}\ 4
\textbf{(E)}\ \text{None}
$
