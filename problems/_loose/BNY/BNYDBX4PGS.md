---
tag: BNYDBX4PGS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every pair of positive integers $(x, y)$ we define $f(x,y)$ as follows:
$f(x,1) = x$
$f(x,y) = 0$ if $y > x$
$f(x +1,y) = y[f(x,y)+ f(x, y-1)]$
Evaluate $f(5, 5)$.
