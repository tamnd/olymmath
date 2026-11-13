---
tag: MQGN1ZQ3EV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77688
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number. Martin the frog is located at position 0 on the real line. Every second, Martin makes a move: he can stay at his position, jump 1 to the right, or jump 1 to the left. Martin wants to be back at his initial position after $p-1$ moves: he then notes $s_{p}$ as the number of sequences of $p-1$ moves that allow him to return to his initial position. What is the remainder of $s_{p}$ modulo $p$?

For example, for $\mathrm{p}=3, \mathrm{~s}_{\mathrm{p}}=3$ since Martin can choose to stay at his position twice, make a jump to the right and then to the left, or make a jump to the left and then to the right.
