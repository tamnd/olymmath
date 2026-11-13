---
tag: PQ1M0XXJB6
kind: problem
type: answer
answer: a_{n}=1+5\cdot3^{n}-4\cdot2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the recurrence relation
$$
\left\{\begin{array}{l}
a_{n}=4 a_{n-1}-3 a_{n-2}+2^{n} (n \geqslant 2), \\
a_{0}=2, a_{1}=8 .
\end{array}\right.
$$
