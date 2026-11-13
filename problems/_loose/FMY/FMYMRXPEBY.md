---
tag: FMYMRXPEBY
kind: problem
type: answer
answer: "131"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114574
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of positive integer solutions $(x, y, z)$ that satisfy the following system of equations:
$$
\left\{\begin{array}{l}
x^{2}+y^{2}=2 z^{2}, \\
z<y \leqslant z+50
\end{array}\right.
$$
