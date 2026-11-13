---
tag: ERBVKZHVZR
kind: problem
type: answer
answer: "1012"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have $2022$ $1s$ written on a board in a line. We randomly choose a strictly increasing sequence from ${1, 2, . . . , 2022}$ such that the last term is $2022$. If the chosen sequence is $a_1, a_2, ..., a_k$ ($k$ is not fixed), then at the $i^{th}$ step, we choose the first a$_i$ numbers on the line and change the 1s to 0s and 0s to 1s. After $k$ steps are over, we calculate the sum of the numbers on the board, say $S$. The expected value of $S$ is $\frac{a}{b}$ where $a, b$ are relatively prime positive integers. Find $a + b.$
