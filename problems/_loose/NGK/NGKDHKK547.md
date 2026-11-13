---
tag: NGKDHKK547
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231842
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a set not empty of positive integers and $AB$ a segment with, initially, only points $A$ and $B$ colored by red. An operation consists of choosing two distinct points $X, Y$ colored already by red and $n\in S$ an integer, and painting in red the $n$ points $A_1, A_2,..., A_n$ of segment $XY$ such that $XA_1= A_1A_2= A_2A_3=...= A_{n-1}A_n= A_nY$ and $XA_1<XA_2<...<XA_n$. Find the least positive integer $m$ such exists a subset $S$ of $\{1,2,.., m\}$ such that, after a finite number of operations, we can paint in red the point $K$ in the segment $AB$ defined by $\frac{AK}{KB}= \frac{2709}{2022}$. Also, find the number of such subsets for such a value of $m$.
