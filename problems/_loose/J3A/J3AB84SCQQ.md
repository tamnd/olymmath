---
tag: J3AB84SCQQ
kind: problem
type: answer
answer: (n-1,1,0,0,\cdots,0,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=102432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
+ Let $n$ be a given integer greater than 5, solve the system of equations
$$
\left\{\begin{array}{l}
x_{1}+x_{2}+x_{3}+\cdots+x_{n}=n+2, \\
x_{1}+2 x_{2}+3 x_{3}+\cdots+n x_{n}=2 n+2, \\
x_{1}+2^{2} x_{2}+3^{2} x_{3}+\cdots+n^{2} \cdot x_{n}=n^{2}+n+4, \\
x_{1}+2^{3} x_{2}+3^{3} x_{3}+\cdots+n^{3} \cdot x_{n}=n^{3}+n+8,
\end{array}\right.
$$

where $x_{i} \geqslant 0, i=1,2, \cdots, n$.
