---
tag: JPPWPXEX0S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Pan-American Girls’ Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3724082
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pagmo/2025
    source: hf-ai-mo-aops
    label: 2025 Pan-American Girls’ Mathematical Olympiad
---
Alice and Beatriz play in turns, placing rectangular pieces on a $2025 \times 2025$ board.
Alice plays first. A move consists of placing a piece on the board covering an integer number of cells.
It is prohibited to play a piece of the same size as the piece placed by the opponent on the immediately preceding turn. Each piece must have all its sides aligned with the grid of the board, and pieces are not allowed to overlap.
There exist infinitely many pieces of each possible size, except for pieces of size $2025 \times 2025$ .
A player loses if they cannot make a valid move. Determine whether there exists a winning strategy and,
if so, which player has it.**Observation:**A piece of size $a \times b$ is the same as a piece of size $b \times a$ .
