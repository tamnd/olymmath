---
tag: 3Q9AA7DQHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56121
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $N$ is written on the board. Two players take turns. On a turn, a player is allowed to either replace the number on the board with one of its divisors (different from one and the number itself), or decrease the number by one (if the number remains positive after this). The player who cannot make a move loses. For which $N$ can the first player win, regardless of how the opponent plays?
