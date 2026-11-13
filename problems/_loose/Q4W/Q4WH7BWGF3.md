---
tag: Q4WH7BWGF3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Give all triples of numbers $(a, b, c)$ that satisfy the equations

$$
\begin{array}{ll}
a+b+c=s_{1} & a-b+c=s_{3} \\
a+b-c=s_{2} & a-b-c=s_{4}
\end{array}
$$

under the additional condition that the set of the four numbers $s_{1}, s_{2}, s_{3}, s_{4}$ (regardless of their order) coincides with the set of the four numbers 1, 2, 3, 4!
