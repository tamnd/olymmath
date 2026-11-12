---
tag: 7VX20DZGB8
kind: problem
type: answer
answer: Theplayerwins
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56528
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players take turns writing natural numbers from 1 to 1000 on the board. The first player writes the number 1 on the board with the first move. Then, on the next move, the player can write either the number $2a$, or the number $a+1$, if the number $a$ is already written on the board. At the same time, it is forbidden to write numbers that are already on the board. The player who writes the number 1000 wins. Who wins with correct play?
