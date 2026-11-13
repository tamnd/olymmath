---
tag: 4P3VAENADG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The number selection game is the following single-player game. Originally, on the table there were positive integers $1, 2,...,22$ (All positive integers not exceeding $22$ appear exactly once). In each move, the player chooses the three numbers $a, b, c$ that are on the table, then the selected numbers $a, b, c$ disappear but a new number $a + b + c$ appears; At the same time, the player's score is added $(a + b)(b+c)(c + a)$. The initial score was $0$. The game ends after $10$ moves (when there are only two numbers left on the board). Call $M, m$ respectively the highest and the lowest possible score of a game.

Determine the value of $\dfrac{M}{m}$.
