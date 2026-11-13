---
tag: 6ZTA2R1SF1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168968
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$x_{1}, x_{2}$, and $x_{3}$ are distinct numbers from each other and from 0, and there is a number $a$ such that

$$
x_{1} x_{2}-a x_{1}+a^{2}=0
$$

and

$$
x_{2} x_{3}-a x_{2}+a^{2}=0
$$

Prove that the following equalities also hold

$$
\begin{gathered}
x_{3} x_{1}-a x_{3}+a^{2}=0 \\
x_{1} x_{2} x_{3}+a^{3}=0 \\
\frac{1}{x_{1}-x_{2}}+\frac{1}{x_{2}-x_{3}}+\frac{1}{x_{3}-x_{1}}=\frac{1}{a}
\end{gathered}
$$
