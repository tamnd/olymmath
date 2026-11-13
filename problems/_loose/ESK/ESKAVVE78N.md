---
tag: ESKAVVE78N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110751
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A square matrix whose elements are all 0 or 1 is called a binary matrix. If in a binary matrix, the elements above the main diagonal (from the top left to the bottom right diagonal) (excluding the main diagonal) are all the same, and the elements below the main diagonal (excluding the main diagonal) are also all the same, then it is called a "good matrix". Given a positive integer $m$. Prove: there exists a positive integer $m$, such that for any positive integer $n>M$ and a given $n \times n$ binary matrix $A_{n}$, one can select integers $1 \leqslant i_{1}<i_{2}<\cdots<i_{n-m} \leqslant$ $n$, and by deleting the $i_{1}, i_{2}, \cdots, i_{n-m}$ rows and the $i_{1}, i_{2}, \cdots, i_{n-m}$ columns from $A_{n}$, the resulting binary matrix $B_{m}$ is a "good matrix".
