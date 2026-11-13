---
tag: KJ1FZNCXST
kind: problem
type: answer
answer: n^{3}+(n-1)^{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We write the terms of the sequence of natural numbers in the following order:

$$
\begin{aligned}
& \text{1,} \\
& \begin{array}{ccccc}
& & 2, & 3, & 4, \\
5, & 6, & 7, & 8, & 9,
\end{array} \\
& \text{10,} 11, 12, 13, 14, 15, 16
\end{aligned}
$$

Show that the sum of the numbers in each horizontal row is equal to the sum of the cubes of two consecutive numbers.
