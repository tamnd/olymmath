---
tag: XGDJFE0AGJ
kind: problem
type: answer
answer: 4(n-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253768
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Ahmet and Betül play a game on $ n\times n$ $ \left(n\ge 7\right)$ board. Ahmet places his only piece on one of the $ n^{2}$ squares. Then Betül places her two pieces on two of the squares at the border of the board. If two squares have a common edge, we call them adjacent squares. When it is Ahmet's turn, Ahmet moves his piece either to one of the empty adjacent squares or to the out of the board if it is on one of the squares at the border of the board. When it is Betül's turn, she moves all her two pieces to the adjacent squares. If Ahmet's piece is already on one of the two squares that Betül has just moved to, Betül attacks to his piece and wins the game. If Ahmet manages to go out of the board, he wins the game. If Ahmet begins to move, he guarantees to win the game putting his piece on one of the $\dots$ squares at the beginning of the game.

$\textbf{(A)}\ 0 \textbf{(B)}\ n^{2} \textbf{(C)}\ \left(n-2\right)^{2} \textbf{(D)}\ 4\left(n-1\right) \textbf{(E)}\ 2n-1$
