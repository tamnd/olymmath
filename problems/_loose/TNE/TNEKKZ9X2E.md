---
tag: TNEKKZ9X2E
kind: problem
type: answer
answer: N_{\max}=5n+2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
As $n, n+1, \ldots, N$ numbers need to be divided into two classes so that there are no three different numbers, $x, y, z$, in either class for which $x+y=z$. What is the maximum value of $N$ for which this can be satisfied?
