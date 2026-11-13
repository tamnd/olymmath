---
tag: RXZGGQSDWJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1151422
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14045
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215846
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2016
    source: hf-ai-mo-aops
    label: 2016 Hong Kong TST
---
Find the largest possible positive integer $n$ , so that there exist $n$ distinct positive real numbers $x_1,x_2,...,x_n$ satisfying the following inequality : for any $1\le i,j \le n,$ $(3x_i-x_j) (x_i-3x_j)\geq (1-x_ix_j)^2$
