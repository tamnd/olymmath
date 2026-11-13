---
tag: XEA770KXCJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an $n \times n$ table, a doll can step one cell up, down, left, or right. Starting from the top-left corner, it can visit each cell exactly once. The doll can do this in $t_{n}$ different ways. Prove that for sufficiently large $n$,

$$
1.25<\sqrt[n^{2}]{t_{n}}<2
$$

Can a better upper bound be given?
