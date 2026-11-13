---
tag: NAS29KH8AJ
kind: problem
type: answer
answer: \frac{13}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218396
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the following system of 7 linear equations with 7 unknowns:
$$
\begin{split}
a+b+c+d+e & = 1 \\
b+c+d+e+f & = 2 \\
c+d+e+f+g & = 3 \\
d+e+f+g+a & = 4 \\
e+f+g+a+b & = 5 \\
f+g+a+b+c & = 6 \\
g+a+b+c+d & = 7 .
\end{split}
$$
What is $g$?
