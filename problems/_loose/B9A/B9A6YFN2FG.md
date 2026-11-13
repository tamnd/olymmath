---
tag: B9A6YFN2FG
kind: problem
type: answer
answer: "511"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a polynomial $P$ such that for every real number $x$,
$$
x^{512} + x^{256} + 1 = (x^2 + x + 1) P(x).
$$
When $P$ is written in standard polynomial form, how many of its coefficients are nonzero?
