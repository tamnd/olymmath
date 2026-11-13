---
tag: 5KSGWEPTSZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $3 n \times n$ board is divided into $n^{2}$ $1 \times 1$ squares, forming a grid with $n-1$ horizontal and $n-1$ vertical lines. Two players, A and B, take turns sawing the board with a fine saw according to the following rules: A starts by sawing a unit length along a grid line from the edge of the board, and then, each time, continues to saw a unit length along a grid line from the current position of the saw. The player who cuts the board into two pieces loses. Question: Which of A and B has a winning strategy?
