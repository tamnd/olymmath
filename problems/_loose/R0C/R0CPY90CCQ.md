---
tag: R0CPY90CCQ
kind: problem
type: answer
answer: 3n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. If
$$
n \equiv r(\bmod 2)(r \in\{0,1\}) \text {, }
$$

find the number of integer solutions to the system of equations
$$
\left\{\begin{array}{l}
x+y+z=r, \\
|x|+|y|+|z|=n
\end{array}\right.
$$
