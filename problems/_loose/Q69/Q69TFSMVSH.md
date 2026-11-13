---
tag: Q69TFSMVSH
kind: problem
type: answer
answer: C_{n}^{k}\cdotC_{n-1}^{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
To place $k$ indistinguishable red balls and $k$ indistinguishable white balls into $n$ different boxes, each box can only hold balls of one color. If placing red balls, each box is limited to one, if placing white balls, the quantity is unlimited. How many different ways are there to place the balls $(1 \leqslant k \leqslant n-1)$?
