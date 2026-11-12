---
tag: T4P6GTHPTB
kind: problem
type: answer
answer: thefirstplayer
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players are playing a game. The number 2022 is written on the board. In one move, a player must replace the current number $a$ on the board with another (different from $a$), obtained as a result of one of the three operations:
1) Subtract 3;
2) Subtract the remainder of dividing $a-2$ by 7 from $a$;
3) Subtract the remainder of dividing $5a-1$ by 7 from $a$.

The player who, after their move, first produces a negative number loses. Which player can win, regardless of the opponent's actions? (20 points)
