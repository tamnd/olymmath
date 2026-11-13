---
tag: 46GRSAYMGA
kind: problem
type: answer
answer: "5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $m$ row by 10 column grid, fill each cell with either 0 or 1, such that each column contains exactly three 1s. Let the sum of the numbers in the $i$-th row ($i=1,2, \cdots, m$) be denoted as $x_{i}$, and for any two columns, there exists a row where the cells intersecting with these two columns are both filled with 1. Let $x=\max _{1 \leqslant i \leqslant m}\left\{x_{i}\right\}$. Then $x_{\text {min }}=$ $ $ .
