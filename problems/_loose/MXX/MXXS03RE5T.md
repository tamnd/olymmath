---
tag: MXXS03RE5T
kind: problem
type: answer
answer: "202"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=36818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the system of equations:

$$
\left\{\begin{array}{l}
x_{0}=x_{0}^{2}+x_{1}^{2}+\ldots+x_{100}^{2} ; \\
x_{1}=2\left(x_{0} x_{1}+x_{1} x_{2}+\ldots+x_{99} x_{100}\right) ; \\
x_{2}=2\left(x_{0} x_{2}+x_{1} x_{3}+\ldots+x_{98} x_{100}\right) \\
x_{3}=2\left(x_{0} x_{3}+x_{1} x_{4}+\ldots+x_{97} x_{100}\right) ; \\
\cdots \cdots \cdots \\
x_{100}=2 x_{1} x_{100}
\end{array}\right.
$$
