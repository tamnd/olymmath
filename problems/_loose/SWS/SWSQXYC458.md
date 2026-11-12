---
tag: SWSQXYC458
kind: problem
type: answer
answer: "1260"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=3130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of pairs of integers $(a ; b)$ such that $1 \leqslant a \leqslant 70, 1 \leqslant b \leqslant 50$, and at the same time,
the area $S$ of the figure defined by the system of inequalities

$$
\left\{\begin{array}{l}
\frac{x}{a}+\frac{y}{b} \geqslant 1 \\
x \leqslant a \\
y \leqslant b
\end{array}\right.
$$

is such that the number $2 S$ is divisible by 5.
