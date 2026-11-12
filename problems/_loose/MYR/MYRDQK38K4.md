---
tag: MYRDQK38K4
kind: problem
type: answer
answer: "175"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=26414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The numbers $1,2, \ldots, 49$ are arranged in a square table

$$
\begin{array}{rrrrrrr}
1, & 2, & 3, & 4, & 5, & 6, & 7 \\
8, & 9, & 10, & 11, & 12, & 13, & 14 \\
\ldots & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots \\
43, & 44, & 45, & 46, & 47, & 48, & 49
\end{array}
$$

An arbitrary number from the table is written down, after which the row and column containing this number are crossed out from the table. The same is done with the remaining table, and so on, a total of 7 times. Find the sum of the written numbers.
