---
tag: PD593ZMDR7
kind: problem
type: answer
answer: (b_{1},b_{2},b_{3})=(0,0,0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given are real numbers $a_{1}, a_{2}, a_{3}, a_{4}$.

Determine for each possible case of these $a_{1}, \ldots, a_{4}$ all triples $\left(b_{1}, b_{2}, b_{3}\right)$ of real numbers (or prove, if applicable, that no such triples exist) for which the system of equations

$$
\begin{aligned}
a_{1} x_{1}^{2}+a_{2} x_{2}^{2}+x_{3}^{2} & =b_{1} \\
x_{2}^{2}+a_{3} x_{3}^{2} & =b_{2} \\
x_{2}^{2}+a_{4} x_{3}^{2} & =b_{3}
\end{aligned}
$$

has exactly one triple $\left(x_{1}, x_{2}, x_{3}\right)$ of real numbers as a solution.
