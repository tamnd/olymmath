---
tag: QB9V855QWA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Kosovo Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3718679
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=46574
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: xk-tst/2025
    source: hf-ai-mo-aops
    label: 2025 Kosovo Team Selection Test
---
A table of dimensions $n \times n$ is given, where $n \ge 2$ .
Each of its squares is colored either red or blue. To every square of the table we assign an ordered pair $(a,b)$ , where $a$ is the number of squares in the same row as it that have the same color as it, and $b$ is the number of squares in the same column as it that have the same color as it (in both cases the square itself is included in the count).

For which values of $n$ is it possible to color the table so that all squares of the table receive distinct ordered pairs?

Note:Two ordered pairs $(x,y)$ and $(x',y')$ are said to be different if $x \ne x'$ or $y \ne y'$ .
