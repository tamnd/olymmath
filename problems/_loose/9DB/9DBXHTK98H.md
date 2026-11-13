---
tag: 9DBXHTK98H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are countless squares arranged in a row, among which, $n(n \geqslant$ 3) consecutive squares are placed with white pieces $A$, followed by $n$ consecutive squares placed with black pieces $B$ (one piece per square), forming such a state: $\cdots \square A A \cdots A B B \cdots B \square \cdots$. Now, the following operation is performed: each time, two adjacent pieces are taken out, and keeping the original order of these two pieces, they are placed in two consecutive empty squares in the current state. Prove: It is possible to achieve a state where the $2 n$ pieces are arranged in an alternating black and white pattern in a row, with no empty squares between any two pieces, after $n$ such operations.
