---
tag: 5CHW2Y0RKA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=24
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Croatia Mathematical Competitions
---
For a positive integer $n$, we say that an array with three rows and $n$ columns is *magical* if there exists a positive integer $k$, $1 \le k \le n$, such that
* the first row is filled with numbers $1, 2, \ldots, n$ in that order
* the second row is filled with numbers $k, k+1, \ldots, n, 1, 2, \ldots, k-1$ in that order
* the third row is filled with numbers between $1$ and $n$ in such order that the sums of the three numbers in each column are all the same.

Determine all positive integers $n$ for which a magical array exists, and for each such $n$ determine the number of magical arrays. (Ireland)
