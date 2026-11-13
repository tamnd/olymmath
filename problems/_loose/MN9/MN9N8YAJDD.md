---
tag: MN9N8YAJDD
kind: problem
type: answer
answer: (0, 1, 2, 3), (2, 3, 0, 1), (1, 0, 3, 2), (3, 2, 1, 0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real quadruples $(a,b,c,d)$ satisfying the system of equations
$$
\left\{ \begin{array}{ll}
ab+cd = 6 \\
ac + bd = 3 \\
ad + bc = 2 \\
a + b + c + d = 6.
\end{array} \right.
$$
