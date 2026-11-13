---
tag: J7X46DEBWW
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integers $n \geqslant 2$ for which the system:

$$
\left\{\begin{aligned}
x_{1}^{2}+x_{2}^{2}+50 & =16 x_{1}+12 x_{2} \\
x_{2}^{2}+x_{3}^{2}+50 & =16 x_{2}+12 x_{3} \\
& \vdots \\
x_{n-1}^{2}+x_{n}^{2}+50 & =16 x_{n-1}+12 x_{n} \\
x_{n}^{2}+x_{1}^{2}+50 & =16 x_{n}+12 x_{1}
\end{aligned}\right.
$$

admits at least one solution in integers.
