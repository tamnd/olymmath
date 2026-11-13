---
tag: DP39N17XDG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267902
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an $8 \times 8$ chess board. Each knight is allowed to move between two squares located at opposite vertices of $2 \times 3$ or $3 \times 2$ rectangles. There are four knights that move on the board, evenly start from the same cell $X$ and return to $X$ and then stop. Assume that every square on the chessboard has at least one of these four roosters moving through.

Prove that there exists a square $Y$ that is different from $X$ such that it is moved over no less than twice by the same knight or by different knights.
