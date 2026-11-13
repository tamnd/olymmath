---
tag: JP18NG1HBQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218403
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You own a calculator that computes exactly. It has all the standard buttons, including a button that replaces the number currently displayed with its arctangent, and a button that replaces whatever is currently displayed with its cosine. You turn on the calculator and it reads 0. You create a sequence by alternately clicking on the arctangent button and the cosine button. (The calculator is in radian mode.) Let $a_n$ be the value displayed after you've pressed the cosine button for the $n$th time. What is $\prod_{k=1}^{11} a_k$?
