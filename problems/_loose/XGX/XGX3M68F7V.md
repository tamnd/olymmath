---
tag: XGX3M68F7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54791
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The game board is a strip $1 \times N$. At the beginning of the game, there is one white checker on several of the leftmost squares, and one black checker on the same number of rightmost squares. White and Black take turns, with White starting. A move consists of moving one of their checkers in the direction of the opponent (White moves to the right, Black to the left). A player can make a simple move or capture the opponent's checkers. For a simple move, a checker can be moved any number of squares, but it cannot jump over either its own or the opponent's checkers. Capturing checkers follows the same rules as in regular checkers:

A checker captures an opponent's checker standing on an adjacent square if the next square is free. In this case, the player's checker moves to the free square, and the captured opponent's checker is removed from the board.

Capturing is mandatory: if there is an opportunity to capture, making a simple move with any checker is not allowed. If a checker, after capturing an opponent's checker, can immediately capture another one, it must continue capturing in the same move.

Who will win this game, White or Black, regardless of the opponent's play? Consider the cases:
a) Each player has one checker, the board is $N>2$ squares long;

b) Each player has two checkers, the board is $N>4$ squares long;

c) Each player has three checkers, the board is $N>6$ squares long;

d) Additional task. One might think that numerical superiority decides the game. However, come up with and draw a position where White has fewer checkers than Black, and yet White starts (with a simple move) and wins.
