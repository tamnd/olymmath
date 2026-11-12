---
tag: VK6QFZXJZA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Petya and Vasya are playing the following game. They have a grid rectangle $1000 \times 2020$, and Petya moves first. On their turn, the first player divides the rectangle into two smaller ones with a single cut along a grid line. Then the second player chooses one of the two resulting rectangles, on which the game will continue (the other rectangle is discarded), and divides it into two smaller ones. Then again, the first player chooses the rectangle on which the game will continue, and so on. The player who cannot make a cut on their turn loses. Who of the players can always win, no matter how their opponent plays?
