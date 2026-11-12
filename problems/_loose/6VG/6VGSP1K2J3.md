---
tag: 6VGSP1K2J3
kind: problem
type: answer
answer: \geq-\sqrt{2}-\frac{1}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=3023
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $a$, for each of which there exists a number $b$ such that the system

$$
\left\{\begin{array}{l}
y=x^{2}-a \\
x^{2}+y^{2}+8 b^{2}=4 b(y-x)+1
\end{array}\right.
$$

has at least one solution $(x ; y)$.
