---
tag: G4VJBHDACF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91913
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
60 The elements of the following $m \times n$ matrix are real numbers
$$
\begin{array}{cccc}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
& \vdots & & \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{array}
$$

The difference between the maximum and minimum elements in each row does not exceed $d>0$. Rearrange the elements in each column in a decreasing sequence, i.e., the maximum element is in the 1st row, and the minimum element is in the $m$-th row. Prove that after the rearrangement, the difference between the maximum and minimum elements in each row still does not exceed $d$.
