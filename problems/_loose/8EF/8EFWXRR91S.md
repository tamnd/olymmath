---
tag: 8EFWXRR91S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The entries on an $ n$ × $ n$ board are colored black and white like it is usually done in a chessboard, and the upper left hand corner is black.

We color the entries on the chess board black according to the following rule:
In each step we choose an arbitrary $ 2$×$ 3$ or $ 3$× $ 2$ rectangle that still contains $ 3$ white entries, and we color these three entries black.

For which values of $ n$ can the whole board be colored black in a finite number of steps
