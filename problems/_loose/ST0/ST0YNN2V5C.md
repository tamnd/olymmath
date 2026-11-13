---
tag: ST0YNN2V5C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167659
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a quadruple of numbers $\operatorname{Az} x_{1}, x_{2}, x_{3}, x_{4}$ a harmonic set if the following holds:

$$
\left(x_{1}-x_{3}\right)\left(x_{2}-x_{4}\right)+\left(x_{2}-x_{3}\right)\left(x_{1}-x_{4}\right)=0
$$

We need to prove the following statement:

A necessary and sufficient condition for the roots of the equation

$$
a x^{4}+4 b x^{3}+6 c x^{2}+4 d x+e=0
$$

$(a \neq 0)$, when arranged in a suitable order, to form a harmonic set, is that the value of the following determinant is 0:

$$
\left|\begin{array}{lll}
a & b & c \\
b & c & d \\
c & d & e
\end{array}\right|
$$
