---
tag: PSRG4VWWC9
kind: problem
type: answer
answer: 2n - 4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215676
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $N$ be a positive integer. Consider a $N \times N$ array of square unit cells. Two corner cells that lie on the same longest diagonal are colored black, and the rest of the array is white. A *move* consists of choosing a row or a column and changing the color of every cell in the chosen row or column.
What is the minimal number of additional cells that one has to color black such that, after a finite number of moves, a completely black board can be reached?
