---
tag: STN0FK8F3J
kind: problem
type: answer
answer: (4N^3 + 3N^2 - N)/6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=85
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatian Mathematical Olympiad
---
Let $N$ be a positive integer. In each square of a $N \times N$ array initially there is a zero. In each move it is allowed to choose a row or a column, erase all the numbers in it and then write numbers from $1$ to $N$ in arbitrary order. What is the maximal possible value of the sum of all numbers in the array?
